const router = require('express').Router({ mergeParams: true });
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  res.json(tasks);
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const task = await tasksService.getById(id);
  res.status(task ? 200 : 404).json(task);
});

router.route('/').post(async (req, res) => {
  const { title, order, description, userId, boardId, columnId } = req.body;
  const task = await tasksService.create({
    title,
    order,
    description,
    userId,
    boardId,
    columnId,
  });
  res.status(201).json(task);
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const { title, order, description, userId, boardId, columnId } = req.body;
  const task = await tasksService.update({
    id,
    title,
    order,
    description,
    userId,
    boardId,
    columnId,
  });
  res.json(task);
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  const task = await tasksService.deleteById(id);
  res.status(204).json(task);
});

module.exports = router;
