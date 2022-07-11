const express = require("express");
const hollywoodControler=require("../component/Hollywood")

const hollywoodRouter=express.Router()
hollywoodRouter.route("/Hollywood")
.get(hollywoodControler.apiController)
module.exports=hollywoodRouter