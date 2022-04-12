const errorHandlerMiddleware=(error,req,res,next)=>{
    console.log(error)
    res.status(500).json({msg:'ops! caught an error'})
}
export default errorHandlerMiddleware