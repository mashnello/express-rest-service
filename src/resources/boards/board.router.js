const router = require('express').Router();
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards);
});

router.route('/:id').get(async (req, res) => {
  try {
    const { id } = req.params;
    const board = await boardsService.getById(id);
    res.json(board);
  } catch (error) {
    res.status(404).end();
  }
});

router.route('/').post(async (req, res) => {
  try {
    const { id, title, columns } = req.body;
    const board = await boardsService.create({
      id,
      title,
      columns,
    });
    res.status(201).json(board);
  } catch (error) {
    res.status(400).end();
  }
});

router.route('/:id').put(async (req, res) => {
  try {
    const { id } = req.params;
    const { title, columns } = req.body;
    const board = await boardsService.update({
      id,
      title,
      columns,
    });
    res.json(board);
  } catch (error) {
    res.status(400).end();
  }
});

router.route('/:id').delete(async (req, res) => {
  try {
    const { id } = req.params;
    const board = await boardsService.deleteById(id);
    res.status(204).json(board);
  } catch (error) {
    res.status(404).end();
  }
});

module.exports = router;
