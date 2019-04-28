const mongoose = require('mongoose');

let taskSchema = new mongoose.Schema({
    task: String,
},
{ _id : false });

let userTodoSchema = new mongoose.Schema({
    user:{
        type:String,
        required: true,
        unique: true
        //validate
    },
    
    todo:[taskSchema]
});

module.exports.taskModel = mongoose.model('task', taskSchema);
module.exports.userTodoModel = mongoose.model('todo_list',userTodoSchema);