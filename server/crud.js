
import mongoose from "mongoose";
import {Product, User} from './schema.js'
import { UGoogle } from "./schemaNew.js";

// 1. get all Users

const getUsers= async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}



//2.---> get a single User

const getUser = async (req, res) => {
    const { id } = req.params   // u have  to define params when working with moongoose
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: "nO SUCH user"})
    }

    const user = await User.findById(id)
    
                                                // CONDITIONAL LOGIC FOR NON-DEVELOPERS
        if(!user) {
          return res.status(404).json({error: 'No such user'})
      }
  
      
res.status(200).json(user)
}


// 3.---------------------> add a User

const addUser = async (req, res) => {
  const {id, img, email, lastName, firstName, phone, verified} = req.body
    

  
    // add doc to db
  try {

    const user = await User.create({id, img, email, lastName, firstName, phone, verified})
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// 4.---------------------> delete a user

const deleteUser = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "nO SUCH user"})
  }
  
  const user= await User.findOneAndDelete({_id: id})

 if (!user) {
    return res.status(404).json({error: 'No such user'})
}

res.status(200).json(user)
}


// 5. SIGN UP USER (SOCIAL LOGIN TOO)
const signupUser = async (req, res) => {
  const {email, name, picture} = req.body

  try {
     const user = await UGoogle.signup(email, name, picture)
     console.log(user)

  

     res.status(200).json({email, name, picture})
  } catch (error) {
     res.status(400).json({error: error.message})
  }


//     res.json ({mssg: 'signup user'})
}




//      EXPORT ALL

export {
    getUsers,
    getUser,
    addUser,
    deleteUser,
    signupUser
}
