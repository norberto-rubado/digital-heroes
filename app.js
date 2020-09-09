const express = require("express")
const path = require("path")
//const archivo = require("./data/heroes.json")

const app = express()

app.get("/",function(req,res) {

    let raiz = "El texto será: ​Ni Superman, IronMan o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne yhueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan comoinspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!"
    //console.log(raiz)
    res.send(raiz)

})

app.get("/heroes",function(req,res) {

    //res.send(archivo)
    let file = path.resolve("data/heroes.json")
    //console.log(file)
    res.sendFile(file)

})

app.get("*",function(req,res) {

    res.send("Not Found")

})

app.listen(3000)

