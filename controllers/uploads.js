const { response } = require("express");

const { uploadFile } = require("../helpers");


const fileUpload = async (req, res = response) => {

    if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
        res.status(400).json({ msg: 'no files to upload' });
        return;
    }


    try {
        //image file
        // const name = await uploadFile(req.files, ['txt', 'md'], 'users');
        const name = await uploadFile(req.files, undefined, 'users');

        res.json({ name });

    } catch (msg) {
        res.status(400).json({ msg });

    }
}

module.exports = {
    fileUpload
}