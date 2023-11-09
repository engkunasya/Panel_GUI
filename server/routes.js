import { getUser,getUsers,addUser, deleteUser,signupUser } from "./crud.js";
import express from "express";


// req.params NOT EQUAL req.body
//:id extension -->(for) req.params

const userRouter = express.Router();
userRouter.get('/', getUsers)
userRouter.get('/:id', getUser)
userRouter.post('/', addUser)
userRouter.delete('/:id', deleteUser)
userRouter.post('/signup', signupUser)



export default userRouter