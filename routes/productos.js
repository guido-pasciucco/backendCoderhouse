const express = require('express')

const { Router } = express 

let router = new Router

router.get('/productos', (req, res) => {
    // Devuelve todos los productos
})
router.get('/productos:id', (req, res) => {
    // Devuelve un producto según su id
})
router.post('/productos', (req, res) => {
    // Recibe y agrega un producto. Lo devuelve con su id asignado
})
router.put('/productos:id', (req, res) => {
    // Recibe y actualiza un producto según su id
})
router.delete('/productos:id', (req, res) => {
    // Elimina un producto según su id
})

