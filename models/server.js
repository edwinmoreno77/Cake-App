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