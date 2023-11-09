import mongoose from 'mongoose'

// const { default: isEmail } = require('validator/lib/isEmail')

const Schema = mongoose.Schema

const UGSchema = new Schema({
    email: {
      type: String,
      required: true,
      unique: true
    },
})

// staticc signup method
// ----> arrow async function vs declaration async function    
UGSchema.statics.signup = async function (email){

    const user = await this.findOne ({ email })

    // ECMA RULE: Always remember about '==/===' vs '=' in TYPE VS VALUE
    if(user == null) {
     await this.create({email})
    }
  
    if(user) {
        return user

    }
    

}

const UGoogle = mongoose.model('Usergoogle', UGSchema);
export {UGoogle}
