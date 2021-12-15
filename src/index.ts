import { vec2dist, vec2lerp } from '@trufi/utils/vec2';
import { geoDistance } from '@trufi/utils/geo/distance';
import { mapPointFromLngLat, mapPointToLngLat } from '@trufi/utils/mapPoint';
import { $, getRandomPosition, pixelsAndMapPointDistanceToZoom, calcGeoLine } from './utils';

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
    center: [0, 0],
    zoom: 2,
    maxZoom: 5,
    zoomControl: false,
    lang: 'ru',
});

const labelStyle = {
    fontSize: 20,
    color: '#474747',
    haloRadius: 1,
    haloColor: '#fff',
};

const realMarker = new mapgl.Marker(map, {
    coordinates: realCoords,
    icon: './marker.svg',
    anchor: [15, 45],
    zIndex: 5,
    label: {
        ...labelStyle,
        text: 'Где я?',
    },
});

let timerStoped = false;
const timer = $('.timer');
const startTime = Date.now();
let passedTime = 0;
function update() {
    requestAnimationFrame(update);
    if (!timerStoped) {
        passedTime = Date.now() - startTime;
        timer.innerHTML = (passedTime / 1000).toFixed(1);
    }
}
update();

const guessButton = $('.guess');
const popup = $('.popup');

function closePopup() {
    popup.style.display = 'none';
}

popup.addEventListener('click', closePopup);
$('.popup-close').addEventListener('click', closePopup);

guessButton.addEventListener('click', () => {
    popup.style.display = '';
    popupMap.invalidateSize();
});

$('.popup-inner').addEventListener('click', (ev) => ev.stopPropagation());

$('.popup-accept').addEventListener('click', () => {
    closePopup();

    guessButton.style.display = 'none';
    realMarker.setLabel();

    timerStoped = true;

    const guessCoords = popupMap.getCenter();
    const guessMapPoints = mapPointFromLngLat(guessCoords);
    const realMapPoints = mapPointFromLngLat(realCoords);
    const distance = vec2dist(guessMapPoints, realMapPoints);
    const zoom = pixelsAndMapPointDistanceToZoom(500, distance);

    new mapgl.Marker(map, {
        coordinates: guessCoords,
        icon: './marker.svg',
        anchor: [15, 45],
        zIndex: 5,
    });

    map.setMinZoom(2);
    map.setZoom(zoom, {
        duration: 5000,
        easing: 'easeOutQuart',
    });

    const nextCenter = [0, 0];
    vec2lerp(nextCenter, guessMapPoints, realMapPoints, 0.5);

    map.setCenter(mapPointToLngLat(nextCenter), {
        duration: 5000,
        easing: 'easeInQuart',
    });

    map.once('moveend', () => {
        const coordinates = calcGeoLine(guessCoords, realCoords);

        new mapgl.Polyline(map, {
            coordinates: coordinates,
            width: 7,
            color: '#fff',
        });
        new mapgl.Polyline(map, {
            coordinates: coordinates,
            width: 4,
            color: '#eb4a4a',
            zIndex: 1,
        });

        const distance = geoDistance(guessCoords, realCoords) / 1000;

        timer.style.display = 'none';

        $('.end').innerHTML = `Вы угадали ${city.name} с точностью ${distance.toFixed(1)}км за ${(
            passedTime / 1000
        ).toFixed(1)}сек`;
    });
});
