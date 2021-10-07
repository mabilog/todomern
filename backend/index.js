import './routes/todos.js'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import dotenv from 'dotenv'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const connection_string = process.env.CONNECTION_STRING;

app.use(cors())
app.use(express.json()) // middleware to pass json to the rest of the application

app.use('/api/todos', todos)

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