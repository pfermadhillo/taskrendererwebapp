const mongoose =require('mongoose');

const taskSchema = mongoose.Schema({
    GUID: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        default: new Date(),
    },
    modified: {
        type: Date,
        default: new Date(),
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
    },
    status: {
        type: String,
        default: "new",
    },
    type: {
        type: String,
        required: "square",
    },
    children: {
        type:  [ this ],
    },
})

var taskdata=mongoose.model('taskdata',taskSchema);
module.exports= taskdata;