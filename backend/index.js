import express from 'express'
import mongoose from 'mongoose'
// import { Todo } from './models/todo'
import dotenv from 'dotenv'
dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;
const connection_string = process.env.CONNECTION_STRING;

app.get("/", (req, res) => {
  res.send("Welcome to out Todo API")
})

app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`)
})

mongoose.connect(connection_string, {
  useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true
})
  .then(() => console.log("MongoDB connection established"))
  .catch(error => console.error("MongoDB connection failed", error.message))