const tasksRepo = require('./task.memory.repository');

const getAll = (boardId) => tasksRepo.getAll(boardId);

const getById = (boardId, id) => tasksRepo.getById(boardId, id);

const create = (task) => tasksRepo.create(task);

const update = (task) => tasksRepo.update(task);

const deleteById = (boardId, id) => tasksRepo.deleteById(boardId, id);

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
};
