const express = require('express');
const hbs = require('hbs');
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const https = require('https') ; 
const db = require('./models/db.js');
const session = require("express-session");

//app.use(express.static(__dirname + '/public'));
const indexRouter = require("./routes/indexRouter");

app.use("/", indexRouter);

app.set('views', path.join(__dirname + '../views/'));

app.set('view engine', 'hbs');

app.use(express.static('public'));
app.use(express.static('routes'));


app.use("/public", express.static(__dirname + "/public"));

app.get('*', function(req,res,next) {
  res.status(404).end('404 Not Found');
});

// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: true }
// }));

// db.createDatabase();
// db.createCollection("Users");
// db.insertOne("Users", {
// 	user : {
// 		name : "y2"
// 	}
// });

//app.use(express.static('public'));

app.listen(port,function(){
	console.log('App listening at port ' + port)
})
