const socket = io();

socket.on("mensajes", (data) => {
    console.log(data);
    render(data);
    socket.emit("message_client", "Chat conectado");
});

const render = (data) => {
    let html = data.map((x)=>{
        return `
            <p> <strong> ${x.nombre} </strong> : ${x.msn} </p>
        `
    }).join(" ")
    document.querySelector("#caja").innerHTML = html;
}

const addInfo = () => {
    let dataObj = {
        nombre: document.querySelector("#nb").value ,
        msn: document.querySelector("#msn").value 
    }
    socket.emit("dataMsn", dataObj);
    console.log(dataObj);
    document.querySelector("#msn").value = "";
    return false 
    

}

document.addEventListener("submit", (e) => {
    e.preventDefault()
})
