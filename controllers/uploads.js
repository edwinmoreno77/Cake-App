const { response } = require("express");

const { uploadFile } = require("../helpers");

const { User, Product } = require('../models');


const fileUpload = async (req, res = response) => {

    try {
        //image file
        const name = await uploadFile(req.files, undefined, 'users');
        res.json({ name });

    } catch (msg) {
        res.status(400).json({ msg });
    }
}

const updateImage = async (req, res = response) => {

    const { id, collection } = req.params;

    let model;

    switch (collection) {
        case 'users':
            model = await User.findById(id);
            if (!model) {
                return res.status(400).json({ msg: 'User not found' });
            }
            break;

        case 'products':
            model = await Product.findById(id);
            if (!model) {
                return res.status(400).json({ msg: 'profuct not found' });
            }
            break;

        default:
            return res.status(500).json({ msg: `collection ${collection} not exist` });
    }
    const name = await uploadFile(req.files, undefined, collection);
    model.img = name;
    await model.save();
    res.json(model);
}

module.exports = {
    fileUpload,
    updateImage
}