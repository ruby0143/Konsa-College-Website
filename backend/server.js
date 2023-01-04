const express = require("express");
const connectDB = require("./db");
const dotenv = require("dotenv");
const collegeInfo = require('./models/collegeInfo');


dotenv.config();
connectDB();
const app = express();

app.use(express.json());

const PORT = 3001;

app.get("/colleges",async (req,resp)=>{
  let data = await collegeInfo.find()
  resp.send(data);

})


const server = app.listen(
  PORT,
  console.log(`Server running on PORT ${PORT}...`.yellow.bold)
);