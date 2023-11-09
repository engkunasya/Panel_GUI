import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import userRouter from "./routes.js";
// import { User } from "./schema.js";
// import { users } from "./data.js";

// CONFIG
dotenv.config()
const app = express()
app.use(express.json())
app.use (helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// ROUTES
app.use('/user', userRouter);


// MONGOOSE SETUP (mongoose.connect().then().catch())
const PORT = process.env.PORT
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(async () => {
 console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
  console.log('listening for requests on port', process.env.PORT)
    })
     // * ADD DATA ONE TIME ONLY
    // await mongoose.connection.db.dropDatabase();
    // User.insertMany(users)
 
    
  })

  
  .catch((err) => {
    console.log(err)
  })