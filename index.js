// Serving File // Middleware Approach
const express = require('express');
const path = require('path');
const server = express();

//middleware definitions
server.use(express.static(path.join(__dirname, 'public')));


server.listen(3000, () => console.log('server is ready'));