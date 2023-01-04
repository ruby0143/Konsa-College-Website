const mongoose = require('mongoose');
const collegelistSchema= mongoose.Schema({
    college_name:String,
    request:Number,
   
});

module.exports= mongoose.model("products",collegelistSchema);