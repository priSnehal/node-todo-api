var mongoose = require('mongoose');
var empSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    deptId: {
        type: Number,
        default: 0
    },
    deptName: {
        type: String,
        default: 'no dept'
    }
});

var Emp = mongoose.model('Emp', empSchema);
module.exports = {
    Emp
}