const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://192.168.0.7:27017/snehal-mongo-db', {
    useNewUrlParser: true
});

module.exports = {
   mongoose
}