import { mapPointToLngLat, mapPointFromLngLat, mapPointsFromMeters } from '@trufi/utils/mapPoint';
import { worldSize } from '@trufi/utils/mapPoint/constants';
import { degToRad, radToDeg, clamp } from '@trufi/utils/common';
import { geoDistance } from '@trufi/utils/geo/distance';
import { vec2lerp } from '@trufi/utils/vec2';
import { cities } from './data';

const maxMeters = 5000;

export function getRandomPosition() {
    const city = cities[Math.floor(Math.random() * cities.length)];
    const meters = Math.random() * maxMeters;
    const centerInMapPoints = mapPointFromLngLat(city.center);
    const distance = mapPointsFromMeters(city.center, meters);
    const angle = Math.PI * 2 * Math.random();
    const position = mapPointToLngLat([
        centerInMapPoints[0] + Math.cos(angle) * distance,
        centerInMapPoints[1] + Math.sin(angle) * distance,
    ]);
    return { position, city };
}

export const $ = (selector: string) => document.querySelector(selector) as HTMLElement;

export function pixelsAndMapPointDistanceToZoom(pixels: number, mapPointDistance: number): number {
    if (pixels === 0) {
        return -Infinity;
    }
    return -Math.log((mapPointDistance * 256) / (pixels * worldSize)) / Math.LN2;
}

export function calcGeoLine(lngLat1: number[], lngLat2: number[]) {
    const steps = 10;

    let points: number[][] = [lngLat1, lngLat2];

    for (let step = 0; step < steps; step++) {
        const nextPoints = [points[0]];

        for (let i = 1; i < points.length; i++) {
            nextPoints.push(calcMidPoint(points[i - 1], points[i]), points[i]);
        }

        points = nextPoints;
    }

    return points;
}

function calcMidPoint(lngLat1: number[], lngLat2: number[]) {
    const lng1 = degToRad(lngLat1[0]);
    const lat1 = degToRad(lngLat1[1]);

    const lng2 = degToRad(lngLat2[0]);
    const lat2 = degToRad(lngLat2[1]);

    // Based on formulae from
    // http://williams.best.vwh.net/avform.htm#Intermediate
    const d = Math.acos(
        Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lng1 - lng2),
    );

    // Split the arc in half
    const f = 0.5;

    const A = Math.sin((1 - f) * d) / Math.sin(d);
    const B = Math.sin(f * d) / Math.sin(d);

    const x = A * Math.cos(lat1) * Math.cos(lng1) + B * Math.cos(lat2) * Math.cos(lng2);

    const y = A * Math.cos(lat1) * Math.sin(lng1) + B * Math.cos(lat2) * Math.sin(lng2);

    const z = A * Math.sin(lat1) + B * Math.sin(lat2);

    const lat = Math.atan2(z, Math.sqrt(x * x + y * y));
    const lng = Math.atan2(y, x);

    return [radToDeg(lng), radToDeg(lat)];
}

/**
 * - t время, прошедшее с начала анимации
 * - b начальное значение анимируемого параметра
 * - с насколько должен измениться параметр в ходе анимации
 * - d продолжительность анимации
 * - x не используется
 */
function easeInQuad(t: number, b: number, c: number, d: number) {
    return c * (t /= d) * t * t + b;
}

export class AnimatedPolyline {
    private creationTime = Date.now();
    private length = 0;
    private polyline: mapgl.Polyline;
    private coordinates: number[][];

    constructor(
        private map: mapgl.Map,
        private options: mapgl.PolylineOptions,
        private duration: number,
        private passedTime: number,
    ) {
        this.coordinates = options.coordinates;

        options.coordinates = [];
        this.polyline = new mapgl.Polyline(map, options);

        for (let i = 1; i < this.coordinates.length; i++) {
            this.length += geoDistance(this.coordinates[i - 1], this.coordinates[i]);
        }
        requestAnimationFrame(this.update);
    }

    public destroy() {
        this.polyline.destroy();
    }

    private update = () => {
        const passedTime = Date.now() - this.creationTime;
        const t = clamp(passedTime / this.duration, 0, 1);
        const currentLength = easeInQuad(passedTime, 0, this.length, this.duration);

        const currentCoordinates: number[][] = [this.coordinates[0]];

        let length = 0;
        for (let i = 1; i < this.coordinates.length; i++) {
            const prev = this.coordinates[i - 1];
            const current = this.coordinates[i];
            const dx = geoDistance(prev, current);
            if (length + dx < currentLength) {
                currentCoordinates.push(current);
            } else {
                const betweenPoint = [0, 0];
                const t = clamp((currentLength - length) / dx, 0, 1);
                vec2lerp(betweenPoint, prev, current, t);
                currentCoordinates.push(betweenPoint);
                break;
            }

            length += dx;
        }

        const points = calcPoints(length / 1000, this.passedTime / 1000);
        const status = calcStatus(points);

        this.options.color = getStatusColor(status);
        this.options.coordinates = currentCoordinates;
        this.polyline.destroy();
        this.polyline = new mapgl.Polyline(this.map, this.options);

        if (t !== 1) {
            requestAnimationFrame(this.update);
        }
    };
}

export function calcPoints(distance: number, seconds: number) {
    const badDistance = 3500;
    const badTime = 300;

    const distanceModifier = 1 - clamp(distance, 1, badDistance) / badDistance;
    const timeModifier = 1 - clamp(seconds, 1, badTime) / badTime;

    const maxPoints = 1000;
    return Math.round(maxPoints * distanceModifier * timeModifier);
}

export function calcStatus(points: number) {
    if (points > 900) {
        return 1;
    } else if (points > 600) {
        return 2;
    } else if (points > 300) {
        return 3;
    } else if (points > 0) {
        return 4;
    }
    return 5;
}

type Status = ReturnType<typeof calcStatus>;

export function getStatusText(status: Status) {
    const text: { [key in Status]: string } = {
        1: 'Превосходно',
        2: 'Хорошо',
        3: 'Неплохо',
        4: 'Почти',
        5: 'Увы',
    };
    return text[status];
}

export function getStatusColor(status: Status) {
    const colors: { [key in Status]: string } = {
        1: '#00a105',
        2: '#84bb00',
        3: '#ffb100',
        4: '#ff8100',
        5: '#ff2323',
    };
    return colors[status];
}

export function findCity(lngLat: number[]) {
    let nearestCity: string | undefined;
    let nearestDistance: number = Infinity;

    for (let i = 0; i < cities.length; i++) {
        const city = cities[i];

        const distance = geoDistance(city.center, lngLat);
        if (distance < 50000 && distance < nearestDistance) {
            nearestCity = city.name;
            nearestDistance = distance;
        }
    }

    return nearestCity;
}

export function pointsPlural(x: number) {
    const f = x % 10;
    if (x < 10 || x > 20) {
        if (f === 1) {
            return 'очко';
        } else if (f >= 2 && f <= 4) {
            return 'очка';
        }
    }
    return 'очков';
}
