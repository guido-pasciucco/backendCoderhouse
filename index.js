const express = require('express')
const productRoutes = require('./routes/productos')
const app = express()

app.use(express.json())

app.use("/api", productRoutes)

app.listen(8080, () => {
    console.log('listening on port 8080')
})

/*
    Consigna: Realizar un proyecto de servidor basado en node.js y express que ofrezca una API RESTful de productos.
    En detalle, que incorpore las siguientes rutas:
    LISTO - GET    '/api/productos'     -> devuelve todos los productos.
    LISTO - GET    '/api/productos/:id' -> devuelve un producto según su id.
    LISTO - POST   '/api/productos'     -> recibe y agrega un producto, y lo devuelve con su id asignado.
    Falta - PUT    '/api/productos/:id' -> recibe y actualiza un producto según su id.
    LISTO - DELETE '/api/productos/:id' -> elimina un producto según su id.
    
    Cada producto estará representado por un objeto con el siguiente formato: {title:"nombre",price:precio,thumbnail:"url"};
    Cada ítem almacenado dispondrá de un id numérico proporcionado por el backend, comenzando en 1, 
    y que se irá incrementando a medida de que se incorporen productos. 
    Ese id será utilizado para identificar un producto que va a ser listado en forma individual.
    
    Falta - Para el caso de que un producto no exista, se devolverá el objeto: {error:'producto no encontrado'}
    Falta - Implementar la API en una clase separada, utilizando un array como soporte de persistencia en memoria.
    LISTO - Incorporar el Router de express en la url base '/api/productos' y configurar todas las subrutas en base a este.
    Falta - Crear un espacio público de servidor que contenga un documento index.html con un formulario de ingreso de productos con los datos apropiados.
    Falta - El servidor debe estar basado en express y debe implementar los mensajes de conexión al puerto 8080 y en caso de error, representar la descripción del mismo.
    LISTO - Las respuestas del servidor serán en formato JSON. La funcionalidad será probada a través de Postman y del formulario de ingreso.
*/