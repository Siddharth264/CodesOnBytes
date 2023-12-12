const express = require('express');
const {getAllTodos, createTodo, deleteTodo, updateTodo} = require('../controllers/todosController')
const router = express.Router();

router.get('/',getAllTodos).post('/',createTodo).delete('/:id',deleteTodo).patch('/:id',updateTodo);

module.exports = router;