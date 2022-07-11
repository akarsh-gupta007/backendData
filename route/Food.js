const express = require("express");
const foodControler=require("../component/Food")

const foodRouter=express.Router()
foodRouter.route("/Food")
.get(foodControler.apiController)
module.exports=foodRouter