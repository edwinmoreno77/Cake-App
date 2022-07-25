const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const User = require('../models/user');


const userGet = async (req = request, res = response) => {

    const { limit = 5, from = 0 } = req.query;
    const query = { state: true };

    // const users = await User.find(query)
    //     .skip(Number(from))
    //     .limit(Number(limit));

    // const total = await User.countDocuments(query);

    const response = await Promise.all([
        User.countDocuments(query),
        User.find(query)
            .skip(Number(from))
            .limit(Number(limit))

    ]);

    res.json({
        total,
        users
    });
}

const userPost = async (req, res = response) => {

    const { name, email, password, role } = req.body;

    const user = new User({ name, email, password, role });

    //encrypt password
    const salt = bcryptjs.genSaltSync(10);
    user.password = bcryptjs.hashSync(password, salt);

    await user.save();

    res.json({
        user
    });
}

const userPut = async (req, res = response) => {

    const { id } = req.params;
    const { _id, password, google, email, ...resto } = req.body;

    //validate in database
    if (password) {
        //encrypt password
        const salt = bcryptjs.genSaltSync(10);
        resto.password = bcryptjs.hashSync(password, salt);
    }

    const user = await User.findByIdAndUpdate(id, resto, { new: true });

    res.json({
        user
    });
}

const userPatch = (req, res = response) => {

    res.json({
        msg: 'patch-controller',
        name: 'Juan',
        lastName: 'Perez',
        age: '20',
        hobbies: ['comer', 'dormir', 'jugar'],
        isMarried: false

    });
}

const userDelete = (req, res = response) => {

    res.json({
        msg: 'delete-controller',
        name: 'Juan',
        lastName: 'Perez',
        age: '20',
        hobbies: ['comer', 'dormir', 'jugar'],
        isMarried: false

    });
}


module.exports = {
    userGet,
    userPost,
    userPut,
    userPatch,
    userDelete
}