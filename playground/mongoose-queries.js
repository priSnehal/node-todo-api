/*
const {
    mongoose
} = require('../server/db/mongoose');
const {
    Emp
} = require('../server/model/emp');
*/
const {
    User
} = require('../server/model/user');

var id = '5c6fd2e5d2aa562998121616';
const {
    ObjectId
} = require('mongodb');

User.findById(id).then((res) => {
    if (!res) {
        return console.log('result not found');
    }
    console.log('Result:', JSON.stringify(res, undefined, 2));
}, (e) => {
    console.log('Error:', e);
});
/*
if (!ObjectId.isValid(id)) {
    console.log('invalid id');
}
Emp.find({
    deptId: {
        $eq: 20
    }
}).then((docs) => {
    console.log('Result of find:', docs);
}, (e) => {
    console.log('Error is:', e);
});

Emp.findOne({
    _id: id
}).then((doc) => {
    console.log('Result of findOne:', doc);
}, (e) => {
    console.log('Error is:', e);
});

//below query returns only _id and name field of document
Emp.findById(id, '_id name').then((doc) => {
    if (!doc) {
        console.log('Id not found');
    } else {
        console.log('result of findById:', doc);
    }
}).catch((e) => {
    console.log('Error:', e);
});

//below query returns all field except _id
Emp.findById(id, '-_id', {
    lean: true
}).then((doc) => {
    if (!doc) {
        return console.log('Id not found');
    }
    console.log('result of findById2:', doc);

}, (e) => {
    console.log('Error is:', e);
});
*/