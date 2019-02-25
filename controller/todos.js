const getCon = require('./todos-controller');

const c1 = getCon.getConnection('snehal-mongo-db').then((res) => {
    console.log('connected to mongo server');
    res.db('snehal-mongo-db').collection('Users').insertOne({
        name: 'snehal',
        age: 25,
        location: 'pune'
    }, (err, result) => {
        if (err) {
            console.log('unable to insert data', err);
        } else {
            console.log(result);
        }
    })
}).catch((error) => {
    console.log('Error is', error);
});
