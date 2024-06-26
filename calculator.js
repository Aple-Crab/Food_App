const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/", function(req,res) {
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n1 + n2;
    res.send("The calculated result is " + result);
});
app.post("/bmicalculator", function(req,res) {
    var weight = parseFloat(req.body.weight);
    var height = Number(req.body.height);
    var bmi= weight/(height*height);
    res.send("Your BMI is " + bmi);
});
app.listen(3000, function() {
    console.log("Server has been started on port 3000");
});