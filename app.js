const express        = require('express');
/*const MongoClient    = require('mongodb').MongoClient;
const db             = require('./config/db');*/
const bodyParser     = require('body-parser');
const app            = express();
const cors           = require('cors');
const util           = require('util');
//const path    		 = require('path');


const port = process.env.PORT || 8000;
app.use(cors());
//use body parser for urlencoded data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//require('./app/routes')(app, {});
app.use('/static', express.static(__dirname + '/static'));
/*app.get('/', function(req, res) {
    res.sendFile(__dirname + '/static/home.html');
});*/

/*MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
  require('./app/routes')(app, database);*/
  app.listen(port, () => {
    console.log('Hey! We are live on ' + port);
  });               
//})

