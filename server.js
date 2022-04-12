import express from "express";
const app=express()

import dotenv from'dotenv'
dotenv.config()



import ConnectDb from "./db/connect.js";

//not found middleware 
import notFoundMiddleware from "./middleware/not-found.js";
//error handler middleware
import errorHandlerMiddleware from'./middleware/error-handler.js'
const port=process.env.PORT || 5000
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const Start=async()=>{
    try {
        ConnectDb(process.env.MONGO_URL)
        app.listen(port,()=>{
            console.log(`server is running on port ${port}`)
        })

    } catch (error) {
     console.log(error);   
    }
}

Start()