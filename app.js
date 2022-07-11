const express = require("express");
const homeRouter=require("./route/Home")
const bollywoodRouter=require("./route/Bollywood")
const fitnessRouter=require("./route/Fitness")
const foodRouter=require("./route/Food")
const technologyRouter=require("./route/Technology")
const hollywoodRouter=require("./route/Hollywood")
const cors=require("cors")
const app=express();

app.use(cors())

app.use("/api",homeRouter)
app.use("/api",bollywoodRouter)
app.use("/api",fitnessRouter)
app.use("/api",foodRouter)
app.use("/api",hollywoodRouter)
app.use("/api",technologyRouter)


app.listen(process.env.PORT||8000,()=>{
    console.log("started the serever");
})