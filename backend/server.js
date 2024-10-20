require('dotenv').config()

const express = require("express");
const mongoose = require('mongoose')

//import routes--------------------------
const movieRoutes = require('./routes/movies')
const userRoutes = require('./routes/users')
const reviewRoutes = require('./routes/reviews')

//express app
const app = express();


//middleware---------------------------
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})




//routes--------------------------------
app.use('/api/movies', movieRoutes)
app.use('/api/users', userRoutes)
app.use('/api/reviews', reviewRoutes)

//connect to db-------------------------
mongoose.connect(process.env.MONGO_URI)
    .then(() => {

        //listening for request-----------------
        app.listen(process.env.PORT, ()=>{
            console.log("Server is running on PORT", process.env.PORT)
        })

    })
    .catch((err) => {
        console.log(err)
    })


