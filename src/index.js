const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const routes = require("../routes")


// Connect to MongoDB database
mongoose
    .connect("mongodb://localhost:27017/my-db", {
        useNewUrlParser: true, useUnifiedTopology: true
    })
    .then(() => {
        const app = express()
        app.use(bodyParser.json())
        app.use("/api", routes) 

        app.listen(8000, () => {
            console.log("Server has started!")
        })
    })
    .catch( () => {
        console.log('Db failed to connect')
    })