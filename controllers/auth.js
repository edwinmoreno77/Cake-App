const { response } = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/user');

const { generateJWT } = require('../helpers/generate-jwt');


const login = async (req, res = response) => {

    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                msg: 'User does not exist - email'
            });
        }

        // Validate if user is active
        if (!user.state) {
            return res.status(400).json({
                msg: 'User does not exist - state: false'
            });
        }


        // Validate password
        const validPassword = bcryptjs.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: 'User/password incorrect - password'
            });
        }


        // Create JWT Payload
        const token = await generateJWT(user.id);

        res.json({
            user,
            token
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'contact admin'
        });
    }


}

module.exports = login