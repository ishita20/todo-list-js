const express = require('express');
const router = express.Router();

const todo_controller = require('../controllers/controller');

//when a get request comes on /test the test method in controller.js is called
//the test function has been exported from the controller.js file and is being used here
router.get('/:user',todo_controller.getTask);

router.post('/:user/addTask',todo_controller.addUser);

router.put('/:user/update', todo_controller.addTask);

router.delete('/:user/:index/delete', todo_controller.deleteTask);

module.exports = router;

