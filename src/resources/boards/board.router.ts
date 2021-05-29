const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router.get('/', async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards.map(Board.toResponse));
});

router.post('/', async (req, res) => {
  try {
    const { id, title, columns } = req.body;
    const board = await boardsService.create({
      id,
      title,
      columns,
    });
    res.status(201).json(Board.toResponse(board));
  } catch (error) {
    res.status(400).end();
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const board = await boardsService.getById(id);
    res.json(Board.toResponse(board));
  } catch (error) {
    res.status(404).end();
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, columns } = req.body;
    const board = await boardsService.update({
      id,
      title,
      columns,
    });
    res.json(Board.toResponse(board));
  } catch (error) {
    res.status(400).end();
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const board = await boardsService.deleteById(id);
    res.status(204).json(Board.toResponse(board));
  } catch (error) {
    res.status(404).end();
  }
});

module.exports = router;
