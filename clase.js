/* SINCRÓNICO */
// Buscó el archivo, lo leyó y yo lo muestro por el console.log
// Try y Catch, si funciona, ejecuta try, que es donde está lo que queremos que pase
// Si hay un error ejecuta catch, en el que tomamos err y despues lo mostrarmos
    try{
        let readFile = fs.readFileSync("./data1.txt", {encoding: "utf-8"})
        console.log(readFile)
    }catch(err){
        console.error(err)
    }
    // Borrar archivo
        fs.unlinkSync("la ruta del archivo, nada más necesita")
    // Escribir archivo - Borra lo anterior
        fs.writeFileSync("./data1.txt", "Escribí el archivo", {encoding: "utf-8"})
    // Escribir archivo - NO borra lo anterior, actualiza
        fs.appendFileSync("./data1.txt", " LO ACTUALICEEE", {encoding: "utf-8"})
    // Llevar este array a un JSON, Crear un archivo .json
        let obj = [
            {id: "1", title: "Té",   price: 125, thumbnail: "..."},
            {id: "2", title: "Café", price: 150, thumbnail: "..."},
            {id: "3", title: "Mate", price: 100, thumbnail: "..."}
        ]
        fs.writeFileSync("./prueba.json", JSON.stringify(obj), {encoding: "utf-8"})

/* ASINCRÓNICO CON CALLBACKS */

    fs.readFile("./data1.txt", "utf8", (err, data) => {
        if (err) return err;
        console.log(data)
    })
    fs.writeFile("./data2.txt", "contenido nuevo", "utf-8", (err)=>{
        if (err) return err;
        console.log("listo")
    })
    fs.unlink("./data2.txt", (err)=>{
        if (err) return "error al borrar";
        console.log("Se borró correctamente")
    })

/* ASINCRÓNICO CON PROMISES */
    fs.promises.readFile("./data1.txt", "utf-8")
        .then((data)=>{return console.log("TODO BIEN " + data)})
        .catch((err)=>{return err})
//también podría ser throw err; y tira más data.

/* ASYNC Y AWAIT */
// Código ASYNC con una sintaxis parecida a la de SYNC, es solo otra forma de hacerlo
    const save = async () => {
        try{
            let read = await fs.promises.readFile("./data1.txt", "utf8");
            console.log(read);
        }catch(err){
            console.log(err);
        }
    }
    save()
