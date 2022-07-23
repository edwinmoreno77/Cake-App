const { response, request } = require('express');



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

const userPost = (req, res = response) => {

    const body = req.body;
    const { name, age } = req.body;


    res.json({
        msg: 'post-controller',
        // body
        name,
        age,

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