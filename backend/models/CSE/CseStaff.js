const mongoose=require('mongoose')

const CseStaffSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    collegeJoinYear:{
        type:Number,
        required:true
    },
    contact:{
        email:{
            type:String,
            required:true
        },
        phone:{
            type:Number,
            required:true
        }
    }
},{
    timestamps:true
})

module.exports=mongoose.model('CseStaff',CseStaffSchema)