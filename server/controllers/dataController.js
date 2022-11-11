const database = require('../db');
const Data = require('../models/dataModel');

exports.postData = async(req, res, next) => {

    await database.sync();

    const newData = Data.create({
        content: req.body.content
    });

    res.status(200).send({
        message: "DATA"
    })

}

exports.getData = async(req, res, next) => {

    await database.sync();

    const data = await Data.findAll();

    console.log("GIOVANNI")
    res.status(200).send({
        message: data
    })

}
