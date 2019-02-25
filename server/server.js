var express = require('express');
var bodyParser = require('body-parser');

var {
    mongo
} = require('./db/mongoose');
var {
    Emp
} = require('./model/emp');
var {
    User
} = require('./model/user');

var app = express();
app.use(bodyParser.json());
app.post('/emp', (request, response) => {
    var e1 = new Emp({
        id: request.body.id,
        name: request.body.name,
        deptId: request.body.deptId,
        deptName: request.body.deptName
    });
    e1.save().then((doc) => {
        response.send(doc);
        console.log('Result is :', doc);
    }, (e) => {
        response.status(400).send(e);
        console.log('Error is :', e);
    });
    //console.log(request.body);
});
app.listen(3000, () => {
    console.log('Started on port 3000');
});