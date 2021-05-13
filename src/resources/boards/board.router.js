const router = require('express').Router();
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards);
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const board = await boardsService.getById(id);
  res.status(board ? 200 : 404).json(board);
});

router.route('/').post(async (req, res) => {
  const { id, title, columns } = req.body;
  const board = await boardsService.create({
    id,
    title,
    columns,
  });
  res.status(201).json(board);
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const { title, columns } = req.body;
  const board = await boardsService.update({
    id,
    title,
    columns,
  });
  res.json(board);
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  const board = await boardsService.deleteById(id);
  res.status(204).json(board);
});

module.exports = router;
