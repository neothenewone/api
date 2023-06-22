import express from "express";
import db from "./config/db.js"


const app=express();

app.set("port",process.env.PORT || 4000)

app.use("/",(req,res)=>{
    res.send("bienvenido alsafasfasfasf servidor API");
})
app.listen(app.get("port"),()=>{
    console.log("andando en el jajajajajja ",app.get("port"))

})
db.connect().then(()=>{
    console.log("conectado a la db")
})