const express = require('express');
const app = express();
// Data 
let mensajes = [];
let productos = [];
// Server
const http = require('http');
const server = http.createServer(app);
// Archivos estáticos
app.use(express.static(__dirname + '/public'))

// Socket
const {Server} = require('socket.io');
const io = new Server(server);

// Connection
io.on("connection", (socket)=>{
    socket.emit("mensajes", mensajes)    
    socket.on("message_client", (data) => {
        console.log(data);
    })
    socket.on("dataMsn", (data) => {
        mensajes.push(data)
        io.sockets.emit("mensajes", mensajes)
    })
    socket.on("dataProd", (data) => {
        productos.push(data)
        io.sockets.emit("productos", productos)
    })
})

// Ruta 
app.get("/chat", (req, res)=>{
    res.sendFile("./public/index.html", {root : "."})
})
server.listen(8080, () => {
    console.log('listening on 8080')
})
