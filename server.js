import express from "express";
const app=express()

import dotenv from'dotenv'
dotenv.config()

//port
const port=process.env.PORT || 5000

//db
import ConnectDb from "./db/connect.js";

//auth routes
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'

//not found middleware 
import notFoundMiddleware from "./middleware/not-found.js";
//error handler middleware
import errorHandlerMiddleware from'./middleware/error-handler.js'

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Welcome')
})

app.use('/api/v1/auth',authRouter)
app.use('/api/v1/jobs',jobsRouter)


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