import mongoose from "mongoose";
const dbConnect =()=>{
    if(mongoose.connection.readyState>=1){
        return 
    }
    ongoose.conntect(process.env.DB_URL);
}
export default dbConnect;