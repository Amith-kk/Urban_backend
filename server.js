require("dotenv").config()
const express = require("express")
const cors = require("cors")
const adminRoutes = require('./Routes/AdminRoute')
const categoryRoutes = require('./Routes/CategoryRoute')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/admin',adminRoutes)
app.use('/category',categoryRoutes)
require('./DB/connection')

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

const PORT = 3000 || process.env.PORT

app.listen(PORT,()=>{
    console.log(`server started listening at PORT ${PORT}`);
})