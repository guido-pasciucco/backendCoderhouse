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