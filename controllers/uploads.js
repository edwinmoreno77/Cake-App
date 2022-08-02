const { response } = require("express")


const fileUpload = (req, res = response) => {

    res.json({
        ok: true,
        message: 'File uploaded'
    })
}


module.exports = {
    fileUpload
}