//importar dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

//iniciando o express
const server = express()

//criar uma rota
server
 
    //utilizar body da requisicao 
    .use(express.urlencoded({ extended: true }))
    //utilizando arquivos estaticos

    .use(express.static('public'))

    //configurar template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    //criar uma rota

    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)
/* I already put this in pages.js
    .get('/', (req, res) => {
        const city = req.query.city
        return res.render('index', {city})
})
*/

//ligar o server
server.listen(5500)