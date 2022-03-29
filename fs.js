
/* Progreso Desafío
    LISTO --------------- save()
    A LA MITAD ---------- getById()
    A LA MITAD ---------- getAll()
    FALTA --------------- deleteById()
    FALTA --------------- deleteAll()
*/

const fs = require('fs');

class Contenedor {
    constructor(nombre, precio, img){
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.product
    }
    save(obj){
        fs.appendFile(`./${this.nombre}`, JSON.stringify(obj), `utf-8`, (err) => {
            if(err){
                console.error(err);
            }else{
                console.log(`Save - Archivo creado`);
            }
        })        
    }
    getAll(){
        fs.readFile(`./${this.nombre}`, `utf-8`, (err, data) => {
            if(err){
                console.error(err);
            }else{
                console.log(JSON.stringify(this.product));
                console.log("getAll")
            }
        })
    }
    getById(id){
        fs.readFile(`./${this.nombre}`, `utf-8`, (err, data) => {
            console.log("getById")
            if(err){
                console.error(err);
            }else{
                let product = JSON.parse(data).filter(x => {
                    return x.id === id;
                })
                console.log(this.product);
            }
        })
    }
    deleteById(){
        console.log("deleteById")
        fs.unlink(`./${this.nombre}`)
    };
    deleteAll(){
        fs.writeFile("./test.json", "", {encoding: "utf-8"}, (err)=>{
            if(err){
                console.log("no funcó che")
            }else{
                console.log("se borró todo")
            }
        })
    }

}
const archivo = new Contenedor("test.json");
archivo.deleteAll() 

/* 
archivo.save({id: 1, nombre: "Guido",precio: 100, img: "dfgsdfg"})
archivo.save({id: 2, nombre: "Pepe",precio: 100, img: "dfgsdfg"})
archivo.save({id: 3, nombre: "Juan",precio: 100, img: "dfgsdfg"})
archivo.save({id: 4, nombre: "Lucia",precio: 100, img: "dfgsdfg"})
archivo.save({id: 5, nombre: "Martina",precio: 100, img: "dfgsdfg"})

archivo.getAll("./test.json")
archivo.getById()
*/