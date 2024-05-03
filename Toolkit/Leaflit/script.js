(function(){
    'use strict';
    // add your script here

    var map = L.map('map').setView([37.035276, -95.645866], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([37.035276, -95.645866]).addTo(map);
    marker.bindPopup("<b>Davis</b>").openPopup();

    var circle = L.circle([37.050576, -95.645866], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);
    var polygon = L.polygon([
        [37.036725, -95.621225],
        [37.031475, -95.622642],
        [37.035047, -95.632519]
    ]).addTo(map);

}());