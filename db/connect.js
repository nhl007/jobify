import mongoose from "mongoose";

const ConnectDb=(url)=>{
 return mongoose.connect(url)
}

export default ConnectDb