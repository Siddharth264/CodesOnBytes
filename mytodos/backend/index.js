const express = require('express');
require('dotenv').config()
const todosRoute = require('./routes/todosRoute')
const configdb = require('./config/dbConfig')
const errorHandler = require('./middlewares/errors')
configdb()

const app = express();

app.use(express.json())

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server is listening on port 3000`)
})

//routes

app.use('/api/v1/todos', todosRoute)

app.use(errorHandler)