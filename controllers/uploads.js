const path = require('path');
const { v4: uuidv4 } = require('uuid');

const { response } = require("express")


const fileUpload = (req, res = response) => {

    if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
        res.status(400).json({ msg: 'no files to upload' });
        return;
    }

    const { file } = req.files;

    const cutName = file.name.split('.');
    const fileExtension = cutName[cutName.length - 1];

    //validate file extension
    const validExtensions = ['png', 'jpg', 'gif', 'jpeg'];
    if (!validExtensions.includes(fileExtension)) {
        return res.status(400).json({ msg: 'invalid file extension', validExtensions });
    }

    const temporaryName = `${uuidv4()}.${fileExtension}`;
    const uploadPath = path.join(__dirname, '../uploads/', temporaryName);

    file.mv(uploadPath, (err) => {
        if (err) {
            return res.status(500).json({ error: err });
        }

        res.json({ msg: 'File uploaded to ' + uploadPath });
    });
}


module.exports = {
    fileUpload
}