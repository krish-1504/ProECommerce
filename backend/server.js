const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./database/database")

//config
dotenv.config({path:"backend/config/config.env"});

// connecting the database
connectDatabase();

app.listen(process.env.PORT,()=>{
    console.log(`Server Started Running at http://localhost:${process.env.PORT}`);
})