// import L from 'leaflet';

// const map = L.map('map', {
//     center: [15.525158, -90.32959],
//     zoom: 7,
//     layers: []
// });

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);


// const markerLayer = L.layerGroup();

// const icon = L.icon({
//     iconUrl: './images/alfiler  .png',
//     iconSize: [35, 35]
// });

// L.marker([15.525158, -90.32959], {
//     icon: icon
// }).addTo(markerLayer);

// markerLayer.addTo(map);


import L from 'leaflet';

// Crear el mapa
const map = L.map('map', {
    center: [15.525158, -90.32959],
    zoom: 7,
    layers: []
});

// Añadir la capa de OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Capa para los marcadores
const markerLayer = L.layerGroup().addTo(map);

// Definir un ícono personalizado
const icon = L.icon({
    iconUrl: './images/alfiler.png',
    iconSize: [35, 35]
});

// Crear un marcador inicial
L.marker([15.525158, -90.32959], { icon: icon }).addTo(markerLayer);

// Función para dibujar una línea entre dos puntos
const drawLine = (coord1, coord2) => {
    // Verificar si ambas coordenadas son válidas
    if (coord1 && coord2) {
        const latLngs = [coord1, coord2];
        L.polyline(latLngs, { color: 'red' }).addTo(map);
    } else {
        alert('Por favor, ingrese coordenadas válidas.');
    }
};

// Manejar el envío del formulario
const form = document.getElementById('coordenadasForm');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener las coordenadas ingresadas
    const coord1Input = document.getElementById('coord1').value;
    const coord2Input = document.getElementById('coord2').value;

    // Convertir las coordenadas a arreglos de números
    const coord1 = coord1Input.split(',').map(coord => parseFloat(coord.trim()));
    const coord2 = coord2Input.split(',').map(coord => parseFloat(coord.trim()));

    // Dibujar la línea
    drawLine(coord1, coord2);
});
