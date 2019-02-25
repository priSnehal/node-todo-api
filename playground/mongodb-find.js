//fetching data from mongo
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://192.168.0.7:27017/snehal-mongo-db', (error, client) => {
    if (error) {
        return console.log('Unable to connect to mongo');
    }
    console.log('connected to mongodb server');
    const db = client.db('snehal-mongo-db');
    const schema = db.collection('Todos');
    schema.find({
        text: 'office modification'
    }).count().then((docs) => {
        console.log('Total Documents :', docs);
        //console.log(JSON.stringify(docs, undefined, 2));
    }, (error) => {
        console.log('Unable to fetch data', error);
    })

    schema.count({
        completed: true
    }, (err, total) => {
        if (err) {
            console.log('Error', err);
        }
        console.log(`${total} records having todos status as true`);
    });

    client.close();
});