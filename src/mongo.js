const mongoose=require("mongoose")
const db='mongodb+srv://New_User_10:New123@cluster0.zkmchcc.mongodb.net/Kart?retryWrites=true&w=majority';
mongoose.connect(db)
.then(()=>{
    console.log('mongoose connected');
    mongo
})
.catch((e)=>{
    console.log('failed');
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const LogInCollection=new mongoose.model('LogInCollection',logInSchema)

module.exports=LogInCollection