const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config.db');

class Server {


    constructor() {

        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/user';

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

        this.app.use(this.userPath, require('../routes/user'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`)
        });
    }


}




module.exports = Server;