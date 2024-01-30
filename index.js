const express = require("express")
require('dotenv').config()
require("./database/mongodb")
const userRoute =  require("./routes/userRoutes")
const authRoute = require("./routes/auth")
const token= require("./tokens/verifyToken")

const app = express()
app.use(express.json())

app.use("/users",token, userRoute)


app.use("/auth", authRoute)


app.listen(process.env.PORT || 3000)