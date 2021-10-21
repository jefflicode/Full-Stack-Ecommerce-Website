// here we are just setting up the backend server

import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'   // using ES module need to include .js at the end of file name
// import products from './data/products.js'
import colors from 'colors'

import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import userRoutes from './routes/userRoutes.js'


dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running....')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))