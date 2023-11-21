
const express = require('express'); // import a middleware and database libraries that we use in our Express applications
const app = express(); //creates an instance of the Express application
const port = 3000;
const host_port = 8080;

// Define a route
app.get('/', (req, res) => {
    res.send('I am Ofir Dabah a dedicated student who want to be a part of Moovit\'s DevOps team');
});

// Start the server
app.listen(port, () => {
    console.log(`Enter the link: http://localhost:${host_port}`);
});

