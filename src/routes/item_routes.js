const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const itemModel = require('./../models/item_model');


router.get('/list', async function (req, res) {
    const items = await itemModel.find();
    // res.send("items List");
    res.json(items);
});

router.post('/add', async function (req, res) {


    await itemModel.deleteOne({ idItem: req.body.idItem });

    //first check if new data is same or not --> then will be add the data --> then save the data --> then show the message it is added

    var newItem = new itemModel({
        idItem: req.body.idItem,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
    });

    await newItem.save();
    const response = { message: "New item is added" + ` ${req.body.name}` };
    res.json(response);

});

router.post('/delete', async function (req, res) {
    await itemModel.deleteOne({ idItem: req.body.idItem });
    const response = { message: "Item is deleted :" + ` ${req.body.idItem}` };
    res.json(response);
});

module.exports = router;