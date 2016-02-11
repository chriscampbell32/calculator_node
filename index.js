// - Create an node.js application.
//  - Install the Express npm package.
//  - Using Express create a server, with one GET route.
//  - The route will consist of three parameters, an operation, a number, a second number.
//  - Create these four math operations `addition`, `subtraction`, `multiplication`, `division`.
//  - When the route is hit, it should display on the page result of the math operation.

var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.get('/:operation/:firstNumber/:secondNumber', function(req, res){
var operation = req.params.operation;
var firstNumber = parseInt(req.params.firstNumber);
var secondNumber = parseInt(req.params.secondNumber);
var value = 0;


if(operation === "addition"){
    value = firstNumber + secondNumber;
    res.send("<p>" + value + "</p>");
} else if(operation === "subtraction"){
   value = firstNumber - secondNumber;
   res.send("<p>" + value + "</p>");
} else if(operation === "multiplication"){
    value = firstNumber * secondNumber;
    res.send("<p>" + value + "</p>");
} else if(operation === "division") {
   value = firstNumber / secondNumber;
   res.send("<p>" + value + "</p>");
}
});





//listen on port
app.listen(PORT, function(){
    console.log("App listening on port %s", PORT);
});