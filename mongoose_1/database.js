let mongoose = require('mongoose');

let models = require('./models/todo_list.js')
//let userTodoList = require('./models/todo_list.js').todoModel;
let userTodoList = models.todoModel;
let completeTodoList = models.userModel;

const server = "localhost:27017";
const database = "todo";

class Database {
    constructor() {
      this._connect()
    }
  _connect() {
       mongoose.connect(`mongodb://${server}/${database}`)
         .then(() => {
           console.log('Database connection successful')
         })
         .catch(err => {
           console.error('Database connection error')
         })
    }
  }
  module.exports = new Database()

//create in separate todo list
// let task = new userTodoList({
//   task:'buy eggs'
// })

//create in user todo list
let userTask = new completeTodoList({
  user:'anwesh.nayak',
  todo:[{
    task:'buy eggs'
  }]
});

userTask.save()
  .then(doc => {
      console.log(doc)
  })
  .catch(err => {
      console.error(err)
  })