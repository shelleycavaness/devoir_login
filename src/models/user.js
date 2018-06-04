import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name : { type: String, required: true },
    email : { type: String, required:true },
    username : { type: String, required:true },
    password : { type: String, required:true },
    //photo to be added
})

const User = mongoose.model('User', userSchema);//this line creates your model
export { User };