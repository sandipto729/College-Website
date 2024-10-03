const mongoose=require('mongoose')

const CseNewsSchema=new mongoose.Schema({
    titile:{type:String,required:true},
    link:{type:String,required:true},
    date:{type:String,required:true}
},{
    timestamps:true
})

module.exports=mongoose.model('CseNews',CseNewsSchema)