const customErrorHandler = require("../middlewares/customErrorHandler");
const Todo = require("../models/todosModel");
const getAllTodos = async (req, res, next) => {
  try {
    const allTodos = await Todo.find({});
    res.status(200).json(allTodos);
  } catch (error) {
    next(error);
  }
};

const createTodo = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    if (!title || !description)
      return next(customErrorHandler(401, "All fields are required"));

    const newTodo = await Todo.create({ title, description });

    res.status(201).json(newTodo);
  } catch (error) {
    next(error);
  }
};

const updateTodo = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const id = req.params.id;
    if (!title && !description) {
      const todo = await Todo.findById(id);
      const updatedTodo = await Todo.findOneAndUpdate(
        { _id: id },
        { isComplete: !todo.isComplete },
        { new: true }
      );
      res.status(200).json(updatedTodo);
    } else {
      const todo = await Todo.findById(id);
      const updatedTodo = await Todo.findOneAndUpdate(
        { _id: id },
        { title, description },
        { new: true }
      );
      res.status(200).json(updatedTodo);
    }
  } catch (error) {
    next(error);
  }
};

const deleteTodo = async (req, res, next) => {
  try {
    const id = req.params.id;

    const ifPresent = await Todo.find({ _id: id });
    if (!ifPresent) return next(customErrorHandler(404, "Not Found"));

    await Todo.deleteOne({ _id: id });

    res.status(200).json({ success: true });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllTodos, createTodo, deleteTodo, updateTodo };
