var {mongoose} = require('../db/mongoose');
var Emp = mongoose.model('Emp',{
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
} );
module.exports = {
    Emp
}