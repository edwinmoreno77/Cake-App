const jwt = require('jsonwebtoken');

const generateJWT = (uid = '', name = '') => {

    return new Promise((resolve, reject) => {

        const payload = { uid, name };

        jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {

            expiresIn: '4h'

        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('Error generating JWT');
            } else {
                resolve(token);
            }
        })

    })
}


module.exports = {
    generateJWT
}