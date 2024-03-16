//write code how express.js sets up a server to handle get requests at '/readfile,read the content of 'example.txt' and send it is as response to browser
const express=require('express');
const fs=require('fs');
const app=express();

app.get('/readfile', (req, res) => {
    const filepath='example.txt';
  fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
       return res.status(500).send('Error reading file');
    } else {
      res.send(data);
    }
  });
});
const PORT = 6000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});