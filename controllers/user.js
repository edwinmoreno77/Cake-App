const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const User = require('../models/user');


const userGet = (req = request, res = response) => {

    const { page = 1, name, lastName, age, hobbies = 'no hobbies', isMarried, apikey } = req.query;

    res.json({
        msg: 'get-controller',
        name,
        lastName,
        age,
        hobbies,
        isMarried,
        apikey,
        page

    });
}

const userPost = async (req, res = response) => {

    const { name, email, password, role } = req.body;

    const user = new User({ name, email, password, role });

    // encrypt password
    const salt = bcryptjs.genSaltSync(10);
    user.password = bcryptjs.hashSync(password, salt);

    await user.save();

    res.json({
        user
    });
}

const userPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'put-controller',
        id
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