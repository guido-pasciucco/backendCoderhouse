/*
    Constructor ----- listo
    Save ------------ listo
    DeleteAll ------- listo
    Getall ---------- listo
    Getbyid --------- listo
    Deletebyid ------ 
*/

const fs = require('fs');

class Contenedor {
    constructor(fileName){
        this.fileName = fileName;
    }
    save(obj){
        fs.appendFile(`./${this.fileName}`, JSON.stringify(obj), `utf-8`, (err) => {
            if(err){
                console.error(err);
            }else{
                console.log(`Archivo creado`);
            }
        })        
    }
    getAll(){ 
        if(fs.existsSync(`./${this.fileName}`)){
            console.log(`El archivo existe`)
            fs.readFile(`./${this.fileName}`,`utf-8`,(err, data)=>{  
                if(err){
                    console.error(err);
                }else{
                    //console.log(this.fileName);
                    const dataParseada = JSON.parse(data)
                    console.log(dataParseada);
                } 
            })
        }else{
            console.log("El archivo no existe")
        }
    }
    deleteAll(){
        fs.writeFile("./test.json", "", {encoding: "utf-8"}, (err)=>{
            if(err){
                console.log("Error, no se borró")
            }else{
                console.log("Se borró todo")
            }
        })
    }
    getById = function(idGet){
        if(fs.existsSync(`./${this.fileName}`)){
            fs.readFile(`./${this.fileName}`,`utf-8`,(err, data)=>{  
                if(err){
                    console.error(err);
                }else{
                    const dataParseada = JSON.parse(data)
                    const prodEncontrado = dataParseada.filter( elemento => elemento.id === idGet)
                    if(prodEncontrado.length <= 0){
                        console.log("ERROR: Ningún producto tiene este ID")
                    }else{
                        console.log(prodEncontrado);    
                    }
                }
                    
            })
        }else{
            console.log("El archivo no existe")
        }
    };

    //SOLO FALTA ESTA
    deleteById(idDelete){
        if(fs.existsSync(`./${this.fileName}`)){
            fs.readFile(`./${this.fileName}`,`utf-8`,(err, data)=>{  
                if(err){
                    console.error(err);
                }else{
                    const dataParseada = JSON.parse(data)
                    const prodEncontrado = dataParseada.filter( elemento => elemento.id === idDelete)
                    if(prodEncontrado.length <= 0){
                        console.log("ERROR: Ningún producto tiene este ID")
                    }else{
                        dataParseada.forEach(function(prod, index, object) {
                            if(prod.id === idDelete){
                                object.splice(index);
                            }
                        });
                        console.log("Eliminados los que tengan id " +  idDelete)       
                        console.log(dataParseada)
                    }
                }
            })
        }else{
            console.log("El archivo no existe")
        }
    };
}

const producto1 = {id:1,nombre:"Café"       ,precio:200,img:"lksdfjg"};
const producto2 = {id:2,nombre:"Té"         ,precio:150,img:"lksdfjg"};
const producto3 = {id:3,nombre:"Mate"       ,precio:210,img:"lksdfjg"};
const producto4 = {id:4,nombre:"Pepas"      ,precio:200,img:"lksdfjg"};
const producto5 = {id:5,nombre:"Medialunas" ,precio:150,img:"lksdfjg"};
const producto6 = {id:6,nombre:"Masitas"    ,precio:210,img:"lksdfjg"};
const producto7 = {id:7,nombre:"Facturas"   ,precio:200,img:"lksdfjg"};
const producto8 = {id:8,nombre:"Palmeritas" ,precio:150,img:"lksdfjg"};
const producto9 = {id:9,nombre:"Torta frita",precio:210,img:"lksdfjg"};

const archivo = new Contenedor("test.json");



archivo.getById(7);

/* 
    archivo.save(producto1);
    archivo.save(producto2);
    archivo.save(producto3);
    archivo.save(producto4);
    archivo.save(producto5);
    archivo.save(producto6);
    archivo.save(producto7);
    archivo.save(producto8);
    archivo.save(producto9);
    archivo.getAll("./test.json")
    archivo.deleteById(4);
    archivo.deleteAll() 
*/