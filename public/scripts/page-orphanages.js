//tipos de dados 
//string "" 
//Number 01 Object
//Object {}
//Bolean true or false
//Array []


//create a map
const map = L.map('mapid').setView([-20.2892542,-40.3114849], 15);


//create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

//create and icon

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

function addMarker({id, name, lat, lng}){


//create popup overlay

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent(`${name} <a href="/orphanage?id=${id}" class="chose-orphanage"> <img src="/images/arrow-white.svg" > </a>`)


//create and add marker
L
.marker([lat, lng], { icon })
.addTo(map)
.bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
console.log(orphanagesSpan);
orphanagesSpan.forEach( span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }
    addMarker(orphanage)
})

/*
//create popup overlay

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent(`${name} <a href="/orphanage?id=${id}" class="chose-orphanage"> <img src="/images/arrow-white.svg" > </a>`)


//create and add marker
L
.marker([lat, lng], { icon })
.addTo(map)
.bindPopup(popup)
*/