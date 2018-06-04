import 'dotenv/config';
import express from 'express';
import volleyball from 'volleyball';
import mongoose from 'mongoose';
import passport from 'passport';
import bcrypt from 'bcrypt';
import { userRouter } from './routes/routes';
import path from 'path';


const app = express();
const { SERVER_PORT, DBUrl } = process.env;
const url = DBUrl;
const options = {promiseLibrary:Promise};
mongoose.connect(url, options);
mongoose.connection.on('connected', ()=>{
    console.log('the mongo is working 27017');
});

app.use(express.static(path.join(__dirname +'/public')));
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(volleyball);

app.get('/', (req, res)=>{
    res.send('life is good with Hajar')
} );

app.use('/users', userRouter);  //app.use is availble in all of the application




app.listen(SERVER_PORT, ()=>{
    console.log(`server is listening... ${SERVER_PORT}`)
})
