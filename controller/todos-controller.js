const MongoClient = require('mongodb').MongoClient;

exports.getConnection = function (dbName) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(`mongodb://192.168.0.7:27017/${dbName}`, {
            useNewUrlParser: true
        }, (error, client) => {
            resolve(client);
        });

    });
}

