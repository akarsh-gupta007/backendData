const express = require("express");
const fitnessControler=require("../component/Fitness")

const fitnessRouter=express.Router()
fitnessRouter.route("/Fitness")
.get(fitnessControler.apiController)
module.exports=fitnessRouter