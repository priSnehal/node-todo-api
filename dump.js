// const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://192.168.0.7:27017/snehal-mongo-db', {
//     useNewUrlParser: true
// });
// var child = new mongoose.Schema({
//     deptId: Number,
//     deptName: String
// })
var mongo=require('./db/mongoose')
mongo.mongoose;


var Emp = mongoose.model('emp', schema);
var emp1 = new Emp({
    id: 102,
    name: 'pqr',
    deptId: 10,
    deptName: 'sales/marketing'

});
var emp2 = new Emp({
    id: 104,
    name:'test'
});
emp2.save().then((doc) => {
    console.log('saved todo', doc);
}, (error) => {
    console.log('unable to save todo', error);
});