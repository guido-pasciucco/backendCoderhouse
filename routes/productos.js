const express = require('express')
const res = require('express/lib/response')
const fs = require('fs')
const { Router } = express
const router = new Router()

router.get('/:id', (req, res) => {
    if(req.params.id){
        fs.readFileSync("productos.json", "utf-8", (err, data) => {
            if(err) console.error(err);
            res.render("index.js", {data: JSON.parse(data)})
        })
    }else{
        fs.readFileSync("productos.json", "utf-8", (err, data) => {
            if(err) console.error(err);
            let obj = JSON.parse(data).find(x => {
                return x.id === req.params.id
            })
            res.render("index.js", {data: obj})
        })
    }
})

router.post('/', (req, res) => {
    if(req.query.admin){
        fs.readFileSync("productos.json", "utf-8", (err, data) => {
            if(err) console.error(err);
            JSON.parse(data).push(req.body);
            res.send("producto guardado exitosamente");
        })
    }else{res.send("Acceso denegado")}
})

router.delete('/:id', (req, res) => {
    if(req.query.admin){
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
    //};
    }else{res.send("Acceso denegado")}
})

module.exports = router