const socket = io();

socket.on("productos", (data) => {
    render(data);
    socket.emit("message_client", "Catalogo de productos conectado");
});

const renderProd = (data) => {
    let html = data.map((y)=>{
        return `
            <p> <strong> ${y.nombre} </strong> : ${y.msn} </p>
        `
    }).join(" ")
    document.querySelector("#cajaProd").innerHTML = html;
}

const addInfoProds = () => {
    let dataObjProd = {
        nombre: document.querySelector("#nombreProd").value ,
        precio: document.querySelector("#precioProd").value , 
        stock: document.querySelector("#stockProd").value 
    }
    socket.emit("dataProd", dataObjProd);
    return false
}

document.addEventListener("submit", (e) => {
    e.preventDefault()
})