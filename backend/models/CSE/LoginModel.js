const mongoose=require('mongoose')

const LoginSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

module.exports=mongoose.model('Login',LoginSchema)

//$2a$10$8EpgfkSy7MPYagJaclppm.rdWrGAtLBmkLsiaAvo72pTd31pVSqkK