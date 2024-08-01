const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

async function databaseConnect(){
    let databaseURL = process.env.DATABASE_URL;

    await mongoose.connect(databaseURL);
    console.log("Database Connected Successfully");
}

module.exports = databaseConnect;