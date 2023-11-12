import mongoose from 'mongoose'

// const { default: isEmail } = require('validator/lib/isEmail')

const Schema = mongoose.Schema

const UGSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
      },
    name: {
        type: String,
        required: true,
      },
    picture: {
      type: String,
      required: true
    },
})

// staticc signup method
// ----> arrow async function vs declaration async function    
UGSchema.statics.signup = async function (email, name, picture){

    const newUser= await this.findOne ({ email })

    // ECMA RULE: Always remember about '==/===' vs '=' in TYPE VS VALUE
    if(newUser == null) {
     await this.create({email, name, picture})
    }
  
    if(newUser) {
        return newUser

    }
    

}

const UGoogle = mongoose.model('Usergoogle', UGSchema);
export {UGoogle}
