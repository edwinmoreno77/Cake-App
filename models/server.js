const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const { dbConnection } = require('../database/config.db');


const corsOptions = {
    // origin: '*',
    origin: 'http://localhost:5173' || 'https://pasteleria-fatima.herokuapp.com',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}

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

        // connect to database
        this.connectDB();

        //Middlewares
        this.middlewares();

        //routes of my app
        this.routes();
    }

    async connectDB() {
        await dbConnection();
    }

    middlewares() {
        //cors
        this.app.use(cors(corsOptions));
        // this.app.use(cors());

        //read and parse json
        this.app.use(express.json());

        //public folder
        this.app.use(express.static('public'));

        // file upload
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
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`)
        });
    }
}

module.exports = Server;