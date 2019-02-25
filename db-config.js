var Mongoose = require('mongoose');
// const {environment} = require("../environments/environments");
const env = process.env.NODE_ENV || false;
var DbSetting = function () {
    var dbConfig = {
        // dbUrl: 'mongodb://173.248.135.123:27011/flokapture-server',
        dbUrl: env ? 'mongodb://173.248.135.123:27011/flokapture-server' : 'mongodb://127.0.0.1:27011/flokapture-server',
    };

    return dbConfig;
};
exports.dbSetting = DbSetting;

exports.dbServer = function () {
    // var serverUrl = 'mongodb://173.248.135.123:27011/flokapture-server';
    var serverUrl = env ? 'mongodb://173.248.135.123:27011/flokapture-server' :
        'mongodb://127.0.0.1:27011/flokapture-server';
    Mongoose.Promise = global.Promise;
    var dbServer = Mongoose.createConnection(serverUrl);
    return dbServer;
};

exports.apiAddress = function () {
    var apiBaseAddress = env ? 'https://pure-journey-27231.herokuapp.com/api/' : 'http://localhost:3000/api/';
    return apiBaseAddress;
};

exports.mongoDbServer = function () {
    var Db = require('mongodb').Db;
    var MongoClient = require('mongodb').MongoClient;
    var Server = require('mongodb').Server;

    return {
        Db: Db,
        Server: Server,
        Client: MongoClient
    };
};