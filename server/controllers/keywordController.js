const database = require('../db');
const Data = require('../models/dataModel');

exports.postKey = async(req, res, next) => {

    await database.sync();

    const newData = Data.create({
        content: req.body.content,
    });

    await newData.save();

}

exports.getKey = async(req, res, next) => {

    await database.sync();

    const data = await Data.findAll();
    
    res.status(200).send({
        message: data
    })

}