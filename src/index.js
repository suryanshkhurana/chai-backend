// require ('dotenv').config
import dotenv from 'dotenv';
dotenv.config();
import connectDB from "./db/index.js";



connectDB();




















// import express from 'express'
// const app = express();
// (async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONDODB_URL}/$
//             {DB_NAME}`)
//         app.on('error',(error)=>{
//             console.log("errr",error);
//             throw error

//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`app is listening on port ${process.env.PORT}`)
//         })

//     }catch(error){
//         console.error('error',error)
//         throw err
//     }
// })()