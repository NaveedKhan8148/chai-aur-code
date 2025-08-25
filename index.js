require('dotenv').config()
const express = require("express")

const PORT = process.env.PORT_NO
const app = express()

app.get("/user",(req,res)=>{
    res.send("bro the code is work fine")
})
console.log(PORT)
app.listen(PORT,()=>{
    console.log(`the servier is runnig on PORT = ${PORT}`)
})