const express = require('express');
require('dotenv').config(); // Load environment variables
const connectDB = require('./config/dbconfig'); // Import database configuration
const userRouter = require("./routes/userRoute");

 const app = express();
 

 connectDB();
  /**Routes*/
  app.use(express.json());
 app.use('/api/users',userRouter);


 app.listen(8082, () => {
    console.log('Server is Running');
    })