const mongoose = require("mongoose");


const connectDatabase=()=>{
    mongoose.connect(process.env.DATABASE_URL).then((data)=>{
        console.log(`Mongodb Connected with Server ${data.connection.host}`)
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports = connectDatabase;