const express = require("express");
const connectDB = require("./db");
const cors = require('cors');
const College = require("./models/collegeInfo.js");
require("dotenv").config();


const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.get("/college/:college",(req,res)=>{
  const college = req.params.college;
  console.log(college);
  College.find({college_name : college},(err,docs)=>{
    if(!err){
      console.log(docs);
      if(docs.length==0){
        res.send("404");
      }
      else{

        res.send(docs);
      }
    }
    else{
      res.status(404);
    }
  })
})
app.get("/",async (req,res)=>{
  res.send("OK");
  
});

app.get("/add",(req,res)=>{
  res.send("ok");
//   const college = new College({
//     college_name: "IIT-BHU",
//     header_photo_link :
// "https://lh3.googleusercontent.com/p/AF1QipP9D06xtt7nFHnI7IQ8XyVUC_60L8…",
// college_logo_link:
// "https://www.iitbhu.ac.in/contents/iitbhu/img/other/iit_logo_original.p…",
// overview:
// "IIT BHU is one of the oldest engineering colleges in India, Founded in…",
// nirf:
// 29,
// mode_of_admission:
// "JOSAA",
// exams:
// "JEE Mains, JEE Advanced",
// connectivity:
// "RAILWAY abcd, AIRPORT abcd, METRO abcd, BUS abcd",
// scholarships:
// "1) 100% Tuition Fee waiver for SC/ST/PH students. 2) Full remission o…",
// positives:
// "Average package of about 13 LPU - strong Alumni base being one of the …",
// negatives:
// "Most of the hostels are decades old and are congested. Which are regre…",
// highest_package:
// 10,
// average_package:
// 10,
// median_package:
// 10,
// top_recruiters:
// "Amazon, Google, Microsoft",
// review_video_link:
// "https://www.youtube.com/watch?v=_gcgwGikYdk",
//   });
  // college.save((err,res)=>{
  //   if(!err){
  //     console.log("Successfully added");
  //   }
  //   else{
  //     console.log(err);
  //   }
  // });
})


app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
