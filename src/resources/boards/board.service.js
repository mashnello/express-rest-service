const boardsRepo = require('./board.memory.repository');
const tasksRepo = require('../tasks/task.memory.repository');

const getAll = () => boardsRepo.getAll();

const getById = (id) => boardsRepo.getById(id);

const create = ({ title, columns }) =>
  boardsRepo.create({
    title,
    columns,
  });

const update = ({ id, title, columns }) =>
  boardsRepo.update({
    id,
    title,
    columns,
  });

const deleteById = (id) => {
  tasksRepo.deleteByBoardId(id);
  return boardsRepo.deleteById(id);
};

module.exports = { getAll, getById, create, update, deleteById };
