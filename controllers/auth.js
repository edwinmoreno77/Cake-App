const { response } = require('express');


const login = async (req, res = response) => {

    res.json({
        message: 'login ok'
    });
}


module.exports = login;