import express from 'express';
import  UserRoute from './router/userRoute.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import postRoute from './router/postRoute.js';
import likeRoute from './router/likeRoute.js';
import commentRoute from "./router/commentRoute.js";
import path from 'path';
import {fileURLToPath} from 'url';

const app=express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicPath = path.join(__dirname,'public');
app.use(express.static(publicPath));
app.use(express.static('postImages'));
app.use(cors()); 


mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/Last_project').then(()=>{
        console.log("mongoDB connected!");
        
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));
        
        app.use('/user',UserRoute);
        app.use('/post',postRoute);
        app.use('/like',likeRoute);
        app.use("/comment",commentRoute);
        app.listen(3000,()=>{
            console.log("Server started!");
        });

    }).catch((err)=>{
  console.log(err);
})
   
