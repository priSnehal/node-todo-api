const con = require('../controller/todos-controller');
con.getConnection('snehal-mongo-db').then((res) => {
    res.db('snehal-mongo-db').collection('Users').findOneAndUpdate({
        name: 'pqr'
    }, {
        $inc: {
            age: 1
        }
    },{
        $set:{
            name:'diya'
        }
    } ,(err, res) => {
        if (res.lastErrorObject.updatedExisting === false) {
            console.log('record not found for updation');
        } else {
            console.log('result is :', res);
        }
    });
}).catch((error) => {
    console.log('unable to update data')
});