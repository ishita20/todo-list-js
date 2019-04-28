const todoList = require('../models/task_model');
let userTodoList = todoList.userTodoModel;

// export the test function so that router can use it
exports.test = function (req,res){
    res.send('hi');
};

exports.addUser = function(req,res){
    let task = new userTodoList({
        user : req.params.user,
        todo : [{
            task : req.body.task
        }]
    })

    task.save(function(err){
        if (err) {
            res.send(err.errmsg)
            throw err;
            
        }
        res.send('Task Added')
    })

    // task.save(function(err) {
    //     // we've saved the dog into the db here
    //     if (err) throw err;
      
    //     task.save(function(err) {
    //       // we've updated the dog into the db here
    //       if (err) throw err;
    //     });
    //     res.send('Task Added')
    //   });
};

exports.getTask = function(req,res){
    userTodoList.find({user:req.params.user}, function(err,todo){
        if (err) {
            res.send(err.errmsg)
            throw err;
        }        res.send(todo)
    })
};


exports.addTask = function (req, res) {
    userTodoList.findOneAndUpdate({user:req.params.user},{$push: {todo: {task: req.body.task}}} , function (err, todo) {
        if (err) return next(err);
        res.send('Todo list udpated.');
    });
};

// exports.deleteTask = function (req, res) {
//     userTodoList.findOneAndUpdate({user:req.params.user},{$pull: {todo: {task: req.body.task}}} , function (err, todo) {
//         if (err) return next(err);
//         res.send('Deleted successfully!');
//     })
// };

exports.deleteTask = function (req, res) {
    let pos = {[`todo.${req.params.index}`] : 1}
    console.log(pos)
    userTodoList.findOneAndUpdate({user:req.params.user},{$unset: pos} , function (err, todo) {
        if (err) return next(err);
        
    })
    let posx = {[`todo`] : null}
    userTodoList.findOneAndUpdate({user:req.params.user},{$pull: posx} , function (err, todo) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};


// exports.deleteTask = function (req, res) {
//     let pos = req.params.index
//     //console.log(`todo.${pos}`)
//     let i = "'"+`todo.${pos}`+"'"
//     console.log(i)
//     userTodoList.findOneAndUpdate({user:req.params.user},{$unset: {i : 1}} , function (err, todo) {
//         if (err) {
//             res.send(err.errmsg)
//             throw err;
//         }
        
//     })

//     userTodoList.findOneAndUpdate({user:req.params.user},{$pull: {'todo': null}} , function (err, todo) {
//         if (err) {
//             res.send(err.errmsg)
//             throw err;
//         }
//         res.send('Deleted successfully!');
//     })

// };