// - Create an node.js application.
//  - Install the Express npm package.
//  - Using Express create a server, with one GET route.
//  - The route will consist of three parameters, an operation, a number, a second number.
//  - Create these four math operations `addition`, `subtraction`, `multiplication`, `division`.
//  - When the route is hit, it should display on the page result of the math operation.

var express = require('express');
var app = express();
var PORT = 3000;







//listen on port
app.listen(PORT, function(){
    console.log("App listening on port %s", PORT);
});