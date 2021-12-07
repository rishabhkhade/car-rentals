const express = require("express")
const app = express()

const dotenv = require("dotenv")
dotenv.config()
app.use(express.json({limit:'100mb'}))
app.use(express.urlencoded({limit:'100mb',extended:false}))
const db= require("./model")
db.sequelize.sync({ alter: true});


app.get("/",(req,res)=>{
    res.json({ status: true, message: `Bramhand API ${process.env.PORT}`, developedBy: "Procohat Pvt. Ltd." })
})

app.listen(process.env.PORT,()=>{
    console.log(`Server Running on ${process.env.PORT}`);
})