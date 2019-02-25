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
const {
    ObjectId
} = require('mongodb');

const port=process.env.PORT || 3000;
var app = express();
app.use(bodyParser.json());
app.post('/user', (request, response) => {
    var user1 = new User({
        email: request.body.email
    });
    user1.save().then((doc) => {
        response.send(doc);
        console.log('result is:', doc);
    }, (e) => {
        console.log('Error is :', e);
        response.send(e);
    })
});
app.get('/user', (request, response) => {
    User.find().then((doc) => {
        response.send(doc);
    }, (e) => {
        response.send(e);
    });
});
app.get('/user/:id', (request, response) => {
    var id = request.params.id;
    console.log('ID is:', id);
    if (ObjectId.isValid(id)) {
        User.findById(id).then((user) => {
            response.send(user);
            console.log('User Email is :', user);
        }).catch((e) => {
            response.status(400).send(e);
            console.log('Error is:', e)
        });
    } else {
        response.status(404).send();
    }
});
//here '/emp'(it is the url must entered after localhost:3000/emp) is the route for posting todos or we can say seding todos with request object
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

app.get('/emp', (request, response) => {
    Emp.find().then((result) => {
        //response.send({Emp});
        //console.log('result is:', result);
        response.send(result);
    }, (e) => {
        response.send(e);
        console.log('Error is:', e);
    });

});
app.listen(port, () => {
    console.log(`Started on port ${port}`);
});
module.exports = {
    app
};
//here we r exporting app variable so that we can use it in other .js files