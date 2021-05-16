const router = require('express').Router({ mergeParams: true });
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const { boardId } = req.params;
  const tasks = await tasksService.getAll(boardId);
  res.json(tasks);
});

router.route('/:id').get(async (req, res) => {
  try {
    const { boardId, id } = req.params;
    const task = await tasksService.getById(boardId, id);
    res.json(task);
  } catch (error) {
    res.status(404).end();
  }
});

router.route('/').post(async (req, res) => {
  try {
    const { boardId } = req.params;
    const { title, order, description, userId, columnId } = req.body;
    const task = await tasksService.create({
      title,
      order,
      description,
      userId,
      boardId,
      columnId,
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(400).end();
  }
});

router.route('/:id').put(async (req, res) => {
  try {
    const { boardId, id } = req.params;
    const { title, order, description, userId, columnId } = req.body;
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
  } catch (error) {
    res.status(400).end();
  }
});

router.route('/:id').delete(async (req, res) => {
  try {
    const { boardId, id } = req.params;
    const task = await tasksService.deleteById(boardId, id);
    res.status(204).json(task);
  } catch (error) {
    res.status(404).end();
  }
});

module.exports = router;
