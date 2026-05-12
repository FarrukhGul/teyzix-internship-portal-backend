import mongoose from 'mongoose'
import env from './env.js'



async function connectDB(){
    try{
        await mongoose.connect(env.MONGO_URI);
         console.log("MongoDB Connected Successfully!") 
    }
    catch(e){
        console.error("Mongo Error..", e.message)
        // why process exit..? if mongo connection failed, so overall app should terminated.
        process.exit(1);
    }
}

export default connectDB;