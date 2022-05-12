/* const socket = io();

socket.on("mensajes", (data) => {
    console.log(data);
    render(data);
    socket.emit("message_client", "Chat conectado");
});

const render = (data) => {
    let html = data.map((x)=>{
        return `
            <p style="color:blue"><strong>${x.nombre}</strong>: <span style="color:green">${x.msn}</span></p>
        `
    }).join(" ")
    document.querySelector("#caja").innerHTML = html;
}

const addInfo = () => {
    let dataObj = {
        nombre: document.querySelector("#nb").value ,
        msn: document.querySelector("#msn").value,
    }
    socket.emit("dataMsn", dataObj);
    console.log(dataObj);
    document.querySelector("#msn").value = "";
    return false 
}

document.addEventListener("submit", (e) => {
    e.preventDefault()
})
 */