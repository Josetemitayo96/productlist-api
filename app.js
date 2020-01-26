require('dotenv').config();
const express = require ('express');
const app = express();
const db = require ('./db/db.js');
const bodyParser = require ('body-parser');
const cors = require('cors');
const router = require ('./routes/index.js');


//parsing incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

const port = process.env.PORT;

app.use(cors());
app.use(router);

app.get('/', (req, res)=>{
    res.send('welcome to productlist-api: /products endpoint to list all products, /product/id to list a specific product using id (id 1-4 are available)  ')
})


app.listen(port, ()=>{
    console.log('listening on 7000');
})