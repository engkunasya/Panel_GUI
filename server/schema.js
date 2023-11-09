import mongoose from "mongoose"

const Schema = mongoose.Schema

const ProductSchema = new Schema({
  id: {
    type: Number,
    
  },
  img: {
    type: String,
    
  },
  title: {
    type: String,
    
  },
  color: {
    type: String,
  },
 producer: {
    type: String,  
  },
price: {
    type: String
},
inStock: {
    type: Boolean,
    default: undefined
}

},
{ timestamps: true }
)

const UserSchema = new Schema({
    id: {
      type: Number,
      
    },
    img: {
      type: String,
      
    },
    lastName: {
      type: String,
      
    },
    firstName: {
      type: String,
    },
   email: {
      type: String,  
    },
  phone: {
      type: String
  },
  verified: {
      type: Boolean,
      default: undefined
  }
  
  },
  { timestamps: true }
  )
 const User = mongoose.model('User', UserSchema);
 const Product = mongoose.model('Product', ProductSchema);

 export {User, Product}