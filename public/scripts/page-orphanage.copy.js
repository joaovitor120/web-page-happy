const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}


//create map
const map = L.map('mapid', options).setView([-27.2226333,-49.6455874], 15);

//create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

//create icon
const icon = L.icon({
   iconUrl: "/images/map-marker.svg", 
   iconSize: [58, 68],
   iconAnchor:[29, 68],
   popupAnchor: [170, 2]
})


//creat and add marker
L
.marker([-27.2194134,-49.6438174], { icon })
.addTo(map)


/* image gallery */

function selectImage(event) {
    const button = event.currentTarget

    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
     buttons.forEach(removeActiveClass)
 
     function removeActiveClass (button) {
        button.ClassList.remove("active")
     }

    //selecionar a imagem clicada
 
    //atualizar o container de imagem
 
    // adiconar a classe .active para este botão
    button.classList.add('active') 

}

/* image gallery */

