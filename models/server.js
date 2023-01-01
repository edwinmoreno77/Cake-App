const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const path = require('path');
const logger = require("morgan");

const { dbConnection } = require('../database/config.db');

// CORSOPTIONS ME PERMITE DEFINIR DE QUE ORIGEN VAN A VENIR LAS PETICIONES

// const corsOptions = {
//     // origin: 'http://localhost:5173',
//     origin: 'https://basic-backend-ready.vercel.app',
//     // origin: '*',
//     credentials: true,            //access-control-allow-credentials:true
//     optionSuccessStatus: 200
// }

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            auth: '/api/auth',
            user: '/api/user',
            categories: '/api/categories',
            products: '/api/products',
            search: '/api/search',
            uploads: '/api/uploads'
        }

        // CONNECT TO DATABASE
        this.connectDB();

        //MIDDLEWARES
        this.middlewares();

        //ROUTES OF MY APP
        this.routes();
    }

    async connectDB() {
        await dbConnection();
    }

    middlewares() {
        //CORS
        this.app.use(cors());
        this.app.use(logger("dev"));

        // PARA CONFIGURAR EL CORS OPTIONS
        // this.app.use(cors(corsOptions));

        //READ AND PARSE JSON
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));



        // FILE UPLOAD
        this.app.use(fileUpload({
            useTempFiles: true,
            tempFileDir: '/tmp/',
            createParentPath: true
        }));
    }


    routes() {

        this.app.use(this.paths.auth, require('../routes/auth'));
        this.app.use(this.paths.categories, require('../routes/categories'));
        this.app.use(this.paths.products, require('../routes/products'));
        this.app.use(this.paths.user, require('../routes/user'));
        this.app.use(this.paths.search, require('../routes/search'));
        this.app.use(this.paths.uploads, require('../routes/uploads'));

        //PUBLIC FOLDER
        // this.app.use(express.static('./frontend/build'));
        this.app.use(express.static(path.join(__dirname, "../frontend/build")));


        // ESTA RUTA LE DICE A EXPRESS QUE CUALQUIER RUTA QUE NO ESTE DEFINIDA EN LAS RUTAS ANTERIORES, ME DEVUELVA EL INDEX.HTML Y REACT SE ENCARGUE DE MANEJAR LAS RUTAS
        // this.app.get('*', (req, res) => {
        //     res.sendFile('index.html', { root: './frontend/build/index.html' });
        // });
        this.app.get("*", function (_, res) {
            res.sendFile(
                path.join(__dirname, "../frontend/build/index.html"),
                function (err) {
                    if (err) {
                        res.status(500).send(err);
                    }
                }
            );
        });
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`)
        });
    }
}

module.exports = Server;



/* //example of server.js file

const express = require('express');
const app = express();
const { dbConnection } = require('./database/config');

const path = require('path');
const logger = require("morgan");
const PORT = process.env.PORT || 4000;

//CORS
const cors = require('cors');
//DOTENV
require('dotenv').config();


app.use(logger("dev"));

//read and parse body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

//database
dbConnection();

//routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

//to deploy react app whith nodejs in heroku
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, "./frontend/build")));

//to deploy react app whith nodejs in heroku
// app.get('*', (req, res) => {
//     res.sendFile(__dirname + '/public/index.html');
// });
app.get("*", function (_, res) {
    res.sendFile(
        path.join(__dirname, "./frontend/build/index.html"),
        function (err) {
            if (err) {
                res.status(500).send(err);
            }
        }
    );
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


*/




// Path: models\server.js

/*

const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const { dbConnection } = require('../database/config.db');

// CORSOPTIONS ME PERMITE DEFINIR DE QUE ORIGEN VAN A VENIR LAS PETICIONES

// const corsOptions = {
//     // origin: 'http://localhost:5173',
//     origin: 'https://basic-backend-ready.vercel.app',
//     // origin: '*',
//     credentials: true,            //access-control-allow-credentials:true
//     optionSuccessStatus: 200
// }

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            auth: '/api/auth',
            user: '/api/user',
            categories: '/api/categories',
            products: '/api/products',
            search: '/api/search',
            uploads: '/api/uploads'
        }

        // CONNECT TO DATABASE
        this.connectDB();

        //MIDDLEWARES
        this.middlewares();

        //ROUTES OF MY APP
        this.routes();
    }

    async connectDB() {
        await dbConnection();
    }

    middlewares() {
        //CORS
        this.app.use(cors());

        // PARA CONFIGURAR EL CORS OPTIONS
        // this.app.use(cors(corsOptions));

        //READ AND PARSE JSON
        this.app.use(express.json());

        //PUBLIC FOLDER
        this.app.use(express.static('public'));

        // FILE UPLOAD
        this.app.use(fileUpload({
            useTempFiles: true,
            tempFileDir: '/tmp/',
            createParentPath: true
        }));
    }


    routes() {

        this.app.use(this.paths.auth, require('../routes/auth'));
        this.app.use(this.paths.categories, require('../routes/categories'));
        this.app.use(this.paths.products, require('../routes/products'));
        this.app.use(this.paths.user, require('../routes/user'));
        this.app.use(this.paths.search, require('../routes/search'));
        this.app.use(this.paths.uploads, require('../routes/uploads'));

        // ESTA RUTA LE DICE A EXPRESS QUE CUALQUIER RUTA QUE NO ESTE DEFINIDA EN LAS RUTAS ANTERIORES, ME DEVUELVA EL INDEX.HTML Y REACT SE ENCARGUE DE MANEJAR LAS RUTAS
        // this.app.get('*', (req, res) => {
        //     res.sendFile('index.html', { root: 'public' });
        // });
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`)
        });
    }
}

module.exports = Server;


*/