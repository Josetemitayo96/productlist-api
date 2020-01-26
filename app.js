const express = require ('express');
const app = express();
const db = require ('./db/db.js');
const bodyParser = require ('body-parser');
const router = require ('./routes/index.js');


//parsing incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(router);

app.get('/', (req, res)=>{
    res.send('welcome to productlist-api')
})

const PORT = 7000;
app.listen(PORT, ()=>{
    console.log('listening on 7000');
})