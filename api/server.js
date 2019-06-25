const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const landingRoute = require('./route.landing');
const citiesRoute = require('./route.cities');
const cityRoute = require('./route.city');
const usersRoute = require('./route.users');
const iconsRoute = require('./route.icons');
const searchRoute = require('./route.search');


mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(bodyParser.raw({type: "*/*"}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var db = mongoose.connection;

let data = [
  {description: 'a nice boat', price: 5000},
  {description: 'a nice hat', price: 45}
]

// let data = app.get('/search', (req, res) =>{
//   collection.find({}).toArray((err, result) =>{
//     if (err) {
//       return res.status(500).send(err);
//     }
//      res.send(result);
//   });
// });

app.post('/search', function(req, res) {
  let parsed = JSON.parse(req.body)
  let searchWord = parsed.query
  //let dbo = db.bd ('test');
  let results = data.filter(function(item){
    return item.description.includes(searchWord)
  })
  res.send(JSON.stringify(results))
})

app.use('/landing', landingRoute);
app.use('/cities', citiesRoute);
app.use('/city', cityRoute);
app.use('/users', usersRoute);
app.use('/icons', iconsRoute);
app.use('/search', searchRoute);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});