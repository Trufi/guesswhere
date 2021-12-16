import { vec2dist, vec2lerp } from '@trufi/utils/vec2';
import { geoDistance } from '@trufi/utils/geo/distance';
import { mapPointFromLngLat, mapPointToLngLat } from '@trufi/utils/mapPoint';
import {
    $,
    getRandomPosition,
    pixelsAndMapPointDistanceToZoom,
    calcGeoLine,
    AnimatedPolyline,
    calcPoints,
    calcStatus,
    getStatusText,
    getStatusColor,
    findCity,
    pointsPlural,
} from './utils';
import { getShareHtml } from './share';

const duration = 3000;
const minZoom = 16;
const { position: realCoords, city } = getRandomPosition();

const map = new mapgl.Map('map', {
    key: '042b5b75-f847-4f2a-b695-b5f58adc9dfd',
    center: realCoords,
    zoom: 16,
    minZoom,
    zoomControl: false,
    lang: 'ru',
});
window.addEventListener('resize', () => map.invalidateSize());

const popupMap = new mapgl.Map('popup-map', {
    key: '042b5b75-f847-4f2a-b695-b5f58adc9dfd',
    center: [77.23746195134629, 59.957078540749734],
    zoom: 2,
    maxZoom: 6,
    zoomControl: false,
    lang: 'ru',
});

const labelStyle = {
    fontSize: 28,
    color: '#0e68bb',
    haloRadius: 2,
    haloColor: '#fff',
};

const realMarker = new mapgl.Marker(map, {
    coordinates: realCoords,
    icon: './marker.svg',
    size: [30, 45],
    anchor: [15, 45],
    zIndex: 5,
    label: {
        ...labelStyle,
        text: 'Где я?',
    },
});

let timerStoped = false;
const timer = $('.timer');
let startTime = -1;
let passedTime = 0;

const startTimer = () => {
    if (startTime === -1) {
        startTime = Date.now();
        timer.style.opacity = String(1);
        requestAnimationFrame(update);
    }
};
setTimeout(startTimer, 10000);
map.once('idle', startTimer);

function update() {
    requestAnimationFrame(update);
    if (!timerStoped) {
        passedTime = Date.now() - startTime;
        timer.innerHTML = (passedTime / 1000).toFixed(1);
    }
}

const guessButton = $('.guess');
const popup = $('.popup');

function closePopup() {
    popup.style.display = 'none';
}

popup.addEventListener('mousedown', closePopup);
$('.popup-inner').addEventListener('mousedown', (ev) => ev.stopPropagation());

$('.popup-close').addEventListener('click', closePopup);

guessButton.addEventListener('click', () => {
    popup.style.display = '';
    popupMap.invalidateSize();
});

$('.popup-accept').addEventListener('click', () => {
    closePopup();

    guessButton.style.display = 'none';
    realMarker.setLabel();

    timerStoped = true;

    const guessCoords = popupMap.getCenter();
    const guessMapPoints = mapPointFromLngLat(guessCoords);
    const realMapPoints = mapPointFromLngLat(realCoords);
    const distance = vec2dist(guessMapPoints, realMapPoints);
    const zoom = pixelsAndMapPointDistanceToZoom(
        Math.min(window.innerWidth, window.innerHeight) - 200,
        distance,
    );

    map.setMinZoom(2);
    map.setZoom(zoom, {
        duration,
        easing: 'easeOutQuart',
    });

    const nextCenter = [0, 0];
    vec2lerp(nextCenter, guessMapPoints, realMapPoints, 0.5);

    map.setCenter(mapPointToLngLat(nextCenter), {
        duration,
        easing: 'easeInQuart',
    });

    const isMobileView = window.innerWidth < 800;
    if (isMobileView) {
        map.setPadding(
            { bottom: 160 },
            {
                duration,
            },
        );
    }

    const coordinates = calcGeoLine(realCoords, guessCoords);
    new AnimatedPolyline(
        map,
        {
            coordinates,
            width: 4,
            width2: 7,
            color: '#eb4a4a',
            color2: '#fff',
            zIndex: 1,
        },
        duration,
        passedTime,
    );
    map.once('moveend', () => {
        realMarker.setLabel({
            ...labelStyle,
            text: city.name,
        });

        const guessCity = findCity(guessCoords);

        new mapgl.Marker(map, {
            coordinates: guessCoords,
            icon: './marker.svg',
            anchor: [15, 45],
            zIndex: 5,
            label: {
                ...labelStyle,
                text: guessCity ? guessCity : '???',
            },
        });

        const distance = geoDistance(guessCoords, realCoords) / 1000;

        const points = calcPoints(distance, passedTime / 1000);
        const status = calcStatus(points);
        const statusText = getStatusText(status);
        const color = getStatusColor(status);

        const dist = Math.round(distance * 10) / 10;
        const time = Math.round((passedTime / 1000) * 10) / 10;
        $('.end-text').innerHTML = /* HTML */ `
            <div class="end-bold end-title" style="color: ${color};">${statusText}!</div>
            Ты заработал
            <span class="end-bold">${points}</span> ${pointsPlural(points)}, угадав
            <span class="end-bold">${city.name}</span> с точностью
            <span class="end-bold">${dist}&nbsp;км</span> за
            <span class="end-bold">${time}&nbsp;сек</span>!
        `;

        $('.end-share').innerHTML = getShareHtml(
            `Я угадал ${
                city.name
            } на карте с точностью ${dist}&nbsp;км и заработал ${points} ${pointsPlural(points)}!`,
        );

        $('.end-restart').addEventListener('click', () => window.location.reload());

        timer.style.display = 'none';
        $('.end').style.display = '';

        if (isMobileView) {
            const bottomHeight = $('.end').clientHeight;
            map.setControlsLayoutPadding({ bottom: bottomHeight });
        }
    });
});
