const express = require('express');
const bodyParser= require('body-parser')
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/todo");

const Schema = mongoose.Schema;

let TodoSchema = new Schema({
  task: {type: String, required: true}
});

let todoListModel = mongoose.model("Todo", TodoSchema);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))//extended false- cannot post nested object

let port = 1234;
app.listen(port, function() {
    console.log('listening on '+port);
  })
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.post('/list_tasks', function(req, res) {
  //console.log(req.body)  
  //res.send(req.body)
  let new_task = new todoListModel(req.body);
  new_task.save(function (err) {
    if (err) {
        return next(err);
    }
    res.send('Task saved successfully')
})
  })