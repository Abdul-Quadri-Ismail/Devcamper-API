const mongoose= require('mongoose')

const connectDB = async ()=>{
    
  
        
        const conn= await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        autoIndex:true,
        useUnifiedTopology:true
    })
    console.log(`Mongo db connected ${conn.connection.host}`.underline.cyan.bold);
 

    


}


module.exports=connectDB