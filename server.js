const Contenedor = require('./fs.js')
const fs = require('fs')
const express = require('express')
const app = express()
const PORT = 8080

const arr = [
    {id: 1,  nombre: "Camiseta Racing"       ,descripcion: "Lorem Ipsum", precio: 2500},
    {id: 2,  nombre: "Camiseta Independiente",descripcion: "Lorem Ipsum", precio: 2400},
    {id: 3,  nombre: "Camiseta River"        ,descripcion: "Lorem Ipsum", precio: 2300},
    {id: 4,  nombre: "Camiseta Boca"         ,descripcion: "Lorem Ipsum", precio: 2250},
    {id: 5,  nombre: "Short Selección"       ,descripcion: "Lorem Ipsum", precio: 1800},
    {id: 6,  nombre: "Short Boca"            ,descripcion: "Lorem Ipsum", precio: 1780},
    {id: 7,  nombre: "Short River"           ,descripcion: "Lorem Ipsum", precio: 1890},
    {id: 8,  nombre: "Short Barcelona"       ,descripcion: "Lorem Ipsum", precio: 1500},
    {id: 9,  nombre: "Short PSG"             ,descripcion: "Lorem Ipsum", precio: 2500},
    {id: 10, nombre: "Botines Nike"          ,descripcion: "Lorem Ipsum", precio: 9240},
    {id: 11, nombre: "Pelotas de Tenis"      ,descripcion: "Lorem Ipsum", precio: 5000},
    {id: 12, nombre: "Pelotas de Baseball"   ,descripcion: "Lorem Ipsum", precio: 8000},
    {id: 13, nombre: "Raquetas de Tenis"     ,descripcion: "Lorem Ipsum", precio: 2200},
    {id: 14, nombre: "Pelotas de Futbol"     ,descripcion: "Lorem Ipsum", precio: 2600},
    {id: 15, nombre: "Soga para saltar"      ,descripcion: "Lorem Ipsum", precio: 1000},
    {id: 16, nombre: "Mancuernas"            ,descripcion: "Lorem Ipsum", precio: 2000},
    {id: 17, nombre: "Yoga mat"              ,descripcion: "Lorem Ipsum", precio: 6000},
    {id: 18, nombre: "Cronómetro"            ,descripcion: "Lorem Ipsum", precio: 4000},
    {id: 19, nombre: "Ropa para ciclista"    ,descripcion: "Lorem Ipsum", precio: 9000},
    {id: 20, nombre: "Anteojos Runner"       ,descripcion: "Lorem Ipsum", precio: 7600}
]

const catalogo = new Contenedor("./catalogo.json" )

fs.writeFile("./catalogo.json", JSON.stringify(arr), "utf8", (err) => {
    if (err) {
        console.error(err);
        return;
    }else{
        console.log("Se creó el archivo")
    }
});

const server = app.listen(PORT, () => {
    console.log(`listening on ${server.address().port}`)
})

server.on('error', error => console.log(`Error en servidor ${error}`))

app.get('/', (req, res) => {
    res.send(`<h1>Hola mundo</h1>
    <h2>Mi primer servidor con Express</h2>
    <p><b>/productos</b> para ver todos los productos</p>
    <p><b>/random</b> para que devuelva un producto random</p>
    <h3>Ambos se pueden ver por la terminal del VSC</h3>`)
})

app.get('/productos', (req, res) => {
    fs.readFile("./catalogo.json", "utf-8", (err, data) => {
        if(err){
            return err
        }else{
            let datos = catalogo.getAll()
            console.log(datos)
        }
    })
})

app.get('/random', (req, res) => {
    fs.readFile("./catalogo.json", "utf-8", (err, data) => {
        if(err){
            return err
        }else{
            let parsedArr = JSON.parse(data)
            let randomProd = parsedArr[Math.floor(Math.random() * parsedArr.length)];
            const randomID = randomProd.id 
            res.send(catalogo.getById(randomID));
        }
    })
})