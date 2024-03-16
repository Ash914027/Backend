//build a express application that needs to handle form submissions conataining Url encoded data,
//Using the URl-encoded body parser middleware,
//write a route handler to handle post requests to /submit endpoint. Parse the incoming Url -encode data and log it to console'
const express = require('express');
const fs=require('fs');
//middleware for parsing Url Encoded bodies
const app = express();

// Middleware for parsing Url Encoded bodies
app.use(express.urlencoded({ extended: true }));
//route hander for serving form
app.get('/', (req, res) => {
 const readStream=fs.createReadStream('form.html');
 readStream.pipe(res);
});

// Route handler for handling post requests to /submit endpoint
app.post('/submit', (req, res) => {
  // Parse the incoming Url-encoded data
  const formData = req.body;
  
  // Log the parsed data to console
  console.log(formData);
  
  // Send a response
  res.send('Form data received');
});

// Start the server
app.listen(4000, () => {
  console.log('Server is running on port 3000');
});
