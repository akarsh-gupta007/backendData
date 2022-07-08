const express = require("express");
const detailsRouter1=require("./route/details")
const cors=require("cors")
const app=express();

app.use(cors())
// app.use("/",function(req,res){
//     res.send("homepage")
// })
app.use("/api",detailsRouter1)

app.listen(process.env.PORT||8000,()=>{
    console.log("started the serever");
})