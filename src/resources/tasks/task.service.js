const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();

const getById = (id) => tasksRepo.getById(id);

const create = ({ title, order, description, userId, boardId, columnId }) =>
  tasksRepo.create({
    title,
    order,
    description,
    userId,
    boardId,
    columnId,
  });

const update = ({ id, title, order, description, userId, boardId, columnId }) =>
  tasksRepo.update({
    id,
    title,
    order,
    description,
    userId,
    boardId,
    columnId,
  });

const deleteById = (id) => tasksRepo.deleteById(id);

module.exports = { getAll, getById, create, update, deleteById };
