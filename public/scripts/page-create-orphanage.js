//tipos de dados 
//string "" 
//Number 01 Object
//Object {}
//Bolean true or false
//Array []


//change settings


//create a map
const map = L.map('mapid').setView([-20.2892542,-40.3114849], 15);


//create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
).addTo(map);

//create and icon

const icon = L.icon({
    iconUrl: "/images/map-marker.svg", 
    iconSize: [58, 68],
    iconAnchor:[29, 68],

 })


//create popup overlay

let marker;


// create and add marker

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;


    //remove icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})


//add photos camp

function addPhotoField(){
    // take the photos container #images
    const container = document.querySelector("#images");
    //take container for duplicate .new-image
    const fieldsContainer = document.querySelectorAll(".new-uploud");
    //accomplish the last image clone add.
    const newclone = fieldsContainer[fieldsContainer.length -1].cloneNode(true);

    //verificar se o campo esta vazioo, se sim, nao adicionar ao container de imagens 
    const input = newclone.children[0];
    if (input.value == ""){
        alert("É preciso inserir o link da foto para efetuar essa ação.");
        return
    }

    //limpar o campo antes de adicionar ao container de imagens

    input.value = "";
    //add the clone to container of #images
    container.appendChild(newclone)

}

function deleteField(event){
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll(".new-uploud");

    if (fieldsContainer.length <= 1){
        //limpar o valor do campo
        alert("Não é possivel deletar este campo.");
        return
    }

    //deletar o campo   
    span.parentNode.remove();
}
/*
function alert(event){
    if (fieldsContainer.length <= 1){
        alert("Voce precisa inserir mais texto para apagar")
    }
}
*/

//select yes or no 
function toggleSelect(event){

    //put the class .active (from the buttons)
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'))

    /*  ==  .forEach(function(button){
        button.classList.remove('active')
    }) */


    //put the class .actuve in this clicked button
    const button = event.currentTarget;
    button.classList.add('active')


    //take clicked button


    //update my input hidden with the select value 
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value
    
    //verify if yes or no


}

