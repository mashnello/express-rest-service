const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const user = await usersService.getById(id);
  res.json(User.toResponse(user));
});

router.route('/').post(async (req, res) => {
  const { name, login, password } = req.body;
  const user = await usersService.create({ name, login, password });
  res.status(201).json(User.toResponse(user));
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const { name, login, password } = req.body;
  const user = await usersService.update({ id, name, login, password });
  res.json(User.toResponse(user));
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  const user = await usersService.deleteById(id);
  res.status(204).json(user);
});

module.exports = router;
