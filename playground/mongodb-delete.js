//fetching data from mongo
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://192.168.0.7:27017/snehal-mongo-db', (error, client) => {
    if (error) {
        return console.log('Unable to connect to mongo');
    }
    console.log('connected to mongodb server');
    const db = client.db('snehal-mongo-db');
    //const schema = db.collection('Todos');
    // db.collection('Todos').deleteOne({
    //     text: 'Eat Lunch'
    // }).then((result) => {
    //     console.log(JSON.stringify(result));
    // })
    // db.collection('Todos').deleteMany({
    //     $and: [{
    //         text: {
    //             $eq: 'test'
    //         }
    //     }, {
    //         completed: {
    //             $eq: true
    //         }
    //     }]
    // }).then((result) => {
    //     console.log(JSON.stringify(result));
    // });something to do

    // db.collection('Todos').findOneAndDelete({text:{$eq:'remainder about policy'}}
    // , (error,result) => {
    //     console.log(result);
    // });
    client.close();
});