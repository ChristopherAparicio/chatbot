var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.post('/hello',function(req,res){
	console.log(req);
	return res.json({
		speech:"Hello",
		displayText:"World",
		source:"Webhook"
	})
})

app.listen((process.env.PORT || 8000),function(){
	console.log('Server ready on', (process.env.PORT || 8000));
});