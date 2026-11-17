// require('dotenv').config({path: './env'})


import express from "express"
import connectDB from "./db/index.js"
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });


/* 1st Approach  everything here

const app = express()

;( async () => {

    try{

        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR: ",error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch(error){
        console.log("ERROR: ",error)
        throw err
    }
})()
*/


// 2nd Approach  in diff modules




connectDB();