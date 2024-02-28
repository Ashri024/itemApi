
// an instance of it
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const itemModel = require('./src/models/item_model');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());



// const dbHost = process.env.mongoDbPath;
const dbHost = 'mongodb+srv://commercekv2003:iphFdHXxDeM6lyfY@cluster123.mybud88.mongodb.net/items';
mongoose.connect(dbHost).then(function(){
    //routes
    app.get('/', function (req, res) {
        const response = { message: "API is working" };
        res.json(response);
    });
    const itemRouter = require('./src/routes/item_routes');
    app.use('/items',itemRouter);
});


// on the request to root (localhost:3000/)

const PORT = process.env.PORT || 3000;
app.listen(PORT,function(req,res){
    console.log("Server is running on port ",PORT);
});
