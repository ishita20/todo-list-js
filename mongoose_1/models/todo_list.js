let mongoose = require('mongoose');

//embedded document
let todoSchema = new mongoose.Schema({
    task: String
});

let userSchema = new mongoose.Schema({
    user:{
        type:String,
        required: true,
        unique: true
        //validate
    },
    todo:[todoSchema]
});

//referenced document
// let userSchema = new mongoose.Schema({
//     username:String,
//     password:String
// });

// let taskSchema = new mongoose.Schema({
//     task:String
// })

// let todoSchema = new mongoose.Schema({
//     user:userSchema,
//     task:[taskSchema]
// })


//arguments-name of collection,schema reference
module.exports.todoModel = mongoose.model('todos', todoSchema);
module.exports.userModel = mongoose.model('todo_list',userSchema);

//referenced document
// module.exports = mongoose.model('users',userSchema);
// module.exports = mongoose.model('todos',taskSchema);
// module.exports = mongoose.model('todo_list',todoSchema)