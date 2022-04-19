const Contenedor = require('../fs')
const fs = require('fs')
const express = require('express')
const { send } = require('express/lib/response')
const { Router } = express 
let router = new Router
const arrProds = []
const contenedor = new Contenedor("test.json");

router.get('/getAll', (req, res) => {
    //res.send({data:arrProds})
    let todo = contenedor.getAll()
    res.send(todo)
})

router.post('/create', (req, res) => {
    console.log(req.body)
    let { nombre, edad, raza } = req.body
    let mascotaNueva = {nombre:nombre, edad:edad, raza:raza,}
    arrProds.push(mascotaNueva)
    res.send("Mascota guardada")
})

router.get(`/getById:3`, (req, res) => {
    let resId = contenedor.getById(3)
    res.send(resId)  
})

router.delete(`/deleteById:3`, (req, res) => {
    let getId = contenedor.getById(3)
    contenedor.deleteById(3)
    res.send(`${contenedor.getId} Borrado exitosamente` )
})

/* 
    router.put(`/putById:${id}`, (req, res) => {
        res.send("Recibe y actualiza un producto según su id")
    })
*/

module.exports = router