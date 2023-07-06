const express = require("express");
const app = express();
const route = require("./Routes/fileSysytemRoute");
app.use(express.json());
app.use("/api",route)

app.listen('5000',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Server Running on Port 5000")
    }

})