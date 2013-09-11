var fs = require('fs');
var express = require('express');
var app = express();

// app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// app.get('/', routes.index);

app.get('/', function(req, res){
  res.render('index');
});

// app.get('/', routes.index);

// app.get('/', function(req, res){
//   // res.render('index.html', {
//   //   title: 'Home'
//   // });
//   console.log(req.url);
//   fs.readFile('/src', function(err, data){
//     res.send('hello yo');
//   });
// });



app.listen(3000);
console.log('listening on port 3000');