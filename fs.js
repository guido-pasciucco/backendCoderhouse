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
    getById(idGet){
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

module.exports = Contenedor

/* 
    const archivo = new Contenedor("test.json");
    archivo.getAll("./test.json")
    archivo.getById(7);
    archivo.deleteById(4);
    archivo.deleteAll() 
    {id: 1,  nombre: "Camiseta Racing"       ,descripcion: "Lorem Ipsum", precio: 2500},
    {id: 2,  nombre: "Camiseta Independiente",descripcion: "Lorem Ipsum", precio: 2400},
    {id: 3,  nombre: "Camiseta River"        ,descripcion: "Lorem Ipsum", precio: 2300},
    {id: 4,  nombre: "Camiseta Boca"         ,descripcion: "Lorem Ipsum", precio: 2250},
    {id: 5,  nombre: "Short Selección"       ,descripcion: "Lorem Ipsum", precio: 1800},
    {id: 6,  nombre: "Short Boca"            ,descripcion: "Lorem Ipsum", precio: 1780},
    {id: 7,  nombre: "Short River"           ,descripcion: "Lorem Ipsum", precio: 1890},
    {id: 8,  nombre: "Short Barcelona"       ,descripcion: "Lorem Ipsum", precio: 1500},
    {id: 9,  nombre: "Short PSG"             ,descripcion: "Lorem Ipsum", precio: 2500},
    {id: 10, nombre: "Botines Nike"          ,descripcion: "Lorem Ipsum", precio: 9240},
    {id: 11, nombre: "Pelotas de Tenis"      ,descripcion: "Lorem Ipsum", precio: 5000},
    {id: 12, nombre: "Pelotas de Baseball"   ,descripcion: "Lorem Ipsum", precio: 8000},
    {id: 13, nombre: "Raquetas de Tenis"     ,descripcion: "Lorem Ipsum", precio: 2200},
    {id: 14, nombre: "Pelotas de Futbol"     ,descripcion: "Lorem Ipsum", precio: 2600},
    {id: 15, nombre: "Soga para saltar"      ,descripcion: "Lorem Ipsum", precio: 1000},
    {id: 16, nombre: "Mancuernas"            ,descripcion: "Lorem Ipsum", precio: 2000},
    {id: 17, nombre: "Yoga mat"              ,descripcion: "Lorem Ipsum", precio: 6000},
    {id: 18, nombre: "Cronómetro"            ,descripcion: "Lorem Ipsum", precio: 4000},
    {id: 19, nombre: "Ropa para ciclista"    ,descripcion: "Lorem Ipsum", precio: 9000},
    {id: 20, nombre: "Anteojos Runner"       ,descripcion: "Lorem Ipsum", precio: 7600}
*/