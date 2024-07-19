const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const db = require('./queries'); //import database functions
const port = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: '*',
    credentials: true,
    optionsSuccessStatus: 200
}))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  req.header("Access-Control-Allow-Origin", "*");
  req.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.get('/', (req, res) => {
    const name = process.env.NAME || 'World'
    res.send(`Hello ${name}!`)
})
app.get('/get', db.getAllListings)
app.get('/get/listing/:id', db.getListingById)
app.put('/put/listing/:id', db.updateField)

app.listen(port, () => console.log(`Listening on port ${port}`));