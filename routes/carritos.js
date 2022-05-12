const express = require('express')
const fs = require('fs')
const { Router } = express
const router = new Router()

router.get('/:id', (req, res) => {
    fs.readFileSync("carritos.json", "utf-8", (err, data) => {
        if(err) console.error(err);
        if(data) res.send(data);
    })
})

router.post('/', (req, res) => {
    console.log(req.body)
    let { id, timestamp, carrito } = req.body
    let carritoNuevo = {id:id, timestamp: timestamp, carrito: carrito}
    arrProds.push(carritoNuevo)
    res.send("Nuevo carrito")
})

router.post('/:id/productos/:idCarrito', (req, res) => {
    fs.readFileSync("productos.json", "utf-8", (err, data) => {
        if(err) console.error(err);
        res.render("index.js", {data: JSON.parse(data)})
        let arr = JSON.parse(data)
        let objSelect = arr.find(x =>{
            return x.id === req.params.id
        })
    })
    fs.readFileSync("../carritos.json", "utf-8", (err, data) => {
        if(err) console.error(err);
        let arr = JSON.parse(data);
        let cartSelect = arr.find(x =>{
            return x.id === req.params.id
        })
        cartSelect.productos.push(objSelect)
        fs.writeFileSync("../carritos.json",JSON.stringify(arr), "utf-8", (err)=>{
            if(err){
                console.error(err);
            }
            console.log("eeeh")
        });
    });
});

router.delete('/:id', (req, res) => {
    fs.readFile(`../carritos.json`,`utf-8`,(err, data)=>{  
        if(err) console.error(err);
        else{
            const dataParseada = JSON.parse(data)
            const prodEncontrado = dataParseada.filter(x =>{
                return x.id === req.params.id
            })
            if(prodEncontrado.length <= 0) console.log("error");
            else{
                dataParseada.forEach(function(prod, index, object){
                    if(prod.id === idDelete) object.splice(index);
                });
                console.log(dataParseada)
            }
        }
    })
})

module.exports = router