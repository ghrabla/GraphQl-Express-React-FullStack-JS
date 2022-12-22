const mongoose = require('mongoose');

const connectDB = () => {
  mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true });

  console.log("MongoDB Connected"); 
};

module.exports = connectDB;
