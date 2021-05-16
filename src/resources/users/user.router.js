const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router
  .route('/')
  .get(async (req, res) => {
    const users = await usersService.getAll();
    res.json(users.map(User.toResponse));
  })
  .post(async (req, res) => {
    try {
      const { name, login, password } = req.body;
      const user = await usersService.create({ name, login, password });
      res.status(201).json(User.toResponse(user));
    } catch (error) {
      res.status(400).end();
    }
  });

router
  .route('/:id')
  .get(async (req, res) => {
    try {
      const { id } = req.params;
      const user = await usersService.getById(id);
      res.json(User.toResponse(user));
    } catch (error) {
      res.status(404).end();
    }
  })
  .put(async (req, res) => {
    try {
      const { id } = req.params;
      const { name, login, password } = req.body;
      const user = await usersService.update({ id, name, login, password });
      res.json(User.toResponse(user));
    } catch (error) {
      res.status(400).end();
    }
  })
  .delete(async (req, res) => {
    try {
      const { id } = req.params;
      const user = await usersService.deleteById(id);
      res.status(204).json(user);
    } catch (error) {
      res.status(404).end();
    }
  });

module.exports = router;
