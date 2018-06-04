import express from 'express';
import { User } from '../models/user';

const userRouter = express.Router();

userRouter.get('/new_user', (req,res) =>{
    res.render('user_add')
})

userRouter.post('/new_user', (req, res) =>{
    let newUser = new User(req.body)
    newUser.save((err, user)=>{ //user is your choice of variables
        if(err) res.send(err)
            res.json(user)
    } )
});

export { userRouter };
