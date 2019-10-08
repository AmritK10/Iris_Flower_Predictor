var express 	= require("express"),
	bodyParser  = require("body-parser"),
	pyShell 	= require("python-shell");

var app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

app.get("/",function(req,res){
	res.render("home");
});

app.post("/iris", function(req, res) {
	console.log(req.body)
  var options = {
    args:
    [
      req.body.sepal_length, 
      req.body.sepal_width, 
      req.body.petal_length, 
      req.body.petal_width 
    ]
  }
  pyShell.PythonShell.run("./predict.py", options, function (err, data) {
    if (err) res.send(err);
    res.render("result",{flower:data});
    // res.send(data);
  });
});

app.listen(3000,function(){
	console.log("Iris Predictor Started");
});