/* const socket1 = io();

socket1.on("productos", (data) => {
    renderProd(data);
    socket1.emit("message_client", "Catalogo de productos conectado");
});

const renderProd = (data) => {
    let html = data.map((y)=>{
        return `
            <p> <strong> Producto: ${y.nombre} </strong> Precio: ${y.precio} </p>
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
    socket1.emit("dataProd", dataObjProd);
    return false
}

document.addEventListener("submit", (e) => {
    e.preventDefault()
}) */