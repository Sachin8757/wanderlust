const express = require('express');
const app = express();
const port = 3000;

// Define a route for the root URL
app.get('/',(req,res)=>{
    // res.render('index');
    res.send("Hello World");
})



// Handle all other routes (404 Not Found)
// app.get('/*',(req,res)=>{
//     res.status(404).send("404 Not Found");
// })

// Start the server
app.listen(port, () => {
  console.log(`Server running`);
})