const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config.db');

class Server {


    constructor() {

        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            auth: '/api/auth',
            user: '/api/user',
            categories: '/api/categories'
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
        this.app.use(cors());

        //read and parse json
        this.app.use(express.json());

        //public folder
        this.app.use(express.static('public'));

    }

    routes() {

        this.app.use(this.paths.auth, require('../routes/auth'));

        this.app.use(this.paths.user, require('../routes/user'));

        this.app.use(this.paths.categories, require('../routes/categories'));


    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`)
        });
    }


}



module.exports = Server;