

const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    
    
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String, 
        required:true
    },
    role: {
        type: String,
        enum: ['admin', 'superadmin'], // Specify possible roles
        default: 'admin', // Default role is 'admin'
    },

})

 const admin = mongoose.model('admin',adminSchema)

 module.exports= admin
