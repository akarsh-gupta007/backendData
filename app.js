const express = require("express");
const detailsRouter1=require("./route/details")
const cors=require("cors")
const app=express();

app.use(cors())
app.use("/api",detailsRouter1)

app.listen(3001,()=>{
    console.log("started the serever");
})