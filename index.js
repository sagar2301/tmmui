var app = require('express')();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT, function(){
  console.log('listening on *:3000');
});
