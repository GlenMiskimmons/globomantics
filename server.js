var express = require('express'),
    app = express(),
     port = process.env.PORT || 80;
app.use(express.static(__dirname + '/public'));
app.listen(port, function(){
    console.log('Server listening on port ', port) 
})