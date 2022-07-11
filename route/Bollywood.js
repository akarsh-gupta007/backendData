const express = require("express");
const boolywoodControler=require("../component/Bollywood")

const boolywoodRouter=express.Router()
boolywoodRouter.route("/Bollywood")
.get(boolywoodControler.apiController)
module.exports=boolywoodRouter