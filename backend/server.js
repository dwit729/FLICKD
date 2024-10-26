require('dotenv').config()
const cors = require('cors');

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
app.use(cors({
    origin: 'http://localhost:5173', // Adjust this to match your React app's origin
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], // Allow specific methods as needed
    allowedHeaders: ['Content-Type', 'Authorization'] // Specify allowed headers
  }));
  
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


