const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//import routes
const todoList = require('./routes/routes');

const app = express();

//let connStr = 'mongodb+srv://dbUser:dbUser@cluster0-xctyf.mongodb.net/todo_list_app?retryWrites=true'
let connStr = 'mongodb+srv://dbUser:dbUser@cluster0-xctyf.mongodb.net/test?retryWrites=true'
let mongoDB = process.env.MONGODB_URI || connStr;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection; 
db.on('error', console.error.bind(console, 'mongoDB conn error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//when /todo is accessed the routes.js file is executed
app.use('/todo',todoList)

let port = 1234;
app.listen(port,function(){
    console.log('server running on port ' + port);
});
