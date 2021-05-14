const tasksRepo = require('./task.memory.repository');

const getAll = (boardId) => tasksRepo.getAll(boardId);

const getById = (boardId, id) => tasksRepo.getById(boardId, id);

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

const deleteById = (boardId, id) => tasksRepo.deleteById(boardId, id);

module.exports = { getAll, getById, create, update, deleteById };
