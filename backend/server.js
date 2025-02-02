
// Backend Logic
require("dotenv").config();
const postRoutes=require("./pack/routes/Routes")
const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
 
const app=express();
app.use(cors());
app.use("/api/post",postRoutes)

app.use(express.json());

async function ConnectDB() {
  try{
  mongoose.connect(process.env.MongoDBURI)
  console.log("mongo db is connected");
}
catch(err){
  console.log("mongo db is not connected",err);
}
}
ConnectDB();


const server = app.listen(process.env.PORT,()=>
  console.log("server is running on port",process.env.PORT)
)
server.on("error",(err)=>console.log("Server failed to start",err));