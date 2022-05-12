const express = require('express');
const app = express();
const productosRoutes = require('./routes/productos');
const carritosRoutes = require('./routes/carritos');

app.use("/api/productos", productosRoutes);
app.use("/api/carritos", carritosRoutes);

app.listen(8080, ()=>{
    console.log("Server OK :)")
})