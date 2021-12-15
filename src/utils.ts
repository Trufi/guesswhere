import { mapPointToLngLat, mapPointFromLngLat, mapPointsFromMeters } from '@trufi/utils/mapPoint';
import { worldSize } from '@trufi/utils/mapPoint/constants';
import { degToRad, radToDeg } from '@trufi/utils/common';
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
