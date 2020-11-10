//tipos de dados 
//string "" 
//Number 01 Object
//Object {}
//Bolean true or false
//Array []


//change settings
const options = {
    draggin: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}

//get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

//create a map
const map = L.map('mapid', options).setView([lat, lng], 15);


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


//create popup overlay



//create and add marker


L
.marker([lat, lng], { icon })
.addTo(map)

function selectImage(event) {
    const button = event.currentTarget

    //remover todos as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)// or, i can write buttons.forEach(function() {button.classList.remove("active")}) or ((buttons) => {button.classList.remove("active")})

    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    //selecionar a image clicada 
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container de image
    imageContainer.src = image.src

    //adicionar a classe .active para esse botao clicado
    button.classList.add('active')
}