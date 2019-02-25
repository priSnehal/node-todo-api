const mongooseServer = require('mongoose');
mongooseServer.Promise = global.Promise;
var mongoose = mongooseServer.createConnection(process.env.MONGODB_URI || 'mongodb://192.168.1.5:27017/snehal-mongo-db', {
   useNewUrlParser: true
});

module.exports = {
   mongoose
}