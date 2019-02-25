//inserting data to mongo

const MongoClient = require('mongodb').MongoClient;
// const {MongoClient,ObjectID} = require('mongodb');

// var obj=new ObjectID();
// console.log(obj);
// var user={name:'abc',age:25};
// var {name}=user;
// console.log('name is ',name);
MongoClient.connect('mongodb://192.168.0.7:27017/snehal-mongo-db', (err, client) => {
    if (err) {
        return console.log('Unable to connect mongodb server ');
    }
    console.log('Connected to mongodb server');
    const db = client.db('snehal-mongo-db');

    // db.collection('Todos').insertOne({
    //     text: 'test 2 ',
    //     completed: false
    // }, (err, results) => {
    //     if (err) {
    //         console.log('unable to insert data', err);
    //     }
    //     console.log(JSON.stringify(results.ops, undefined, 2));
    //     console.log('Timestamp :',JSON.stringify(results.ops[0]._id.getTimestamp()));
    // });

    // db.collection('Users').insertMany([{
    //     name: 'abc',
    //     age: 25,
    //     location: 'Pune'
    // }, {
    //     name: 'pqr',
    //     age: 23,
    //     location: 'Bangluru'
    // }], (err, results) => {
    //     if (err) {
    //         console.log('unable to insert data', err);
    //     }
    //     console.log(JSON.stringify(results.ops, undefined, 1));
    //     console.log(`Records To be inserted:${JSON.stringify(results.insertedCount)}`)
    //     console.log(`Ids of inserted record: ${JSON.stringify(results.insertedIds)}`);
    // })
    client.close();
});