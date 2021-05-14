const usersRepo = require('./user.memory.repository');
const tasksRepo = require('../tasks/task.memory.repository');

const getAll = () => usersRepo.getAll();

const getById = (id) => usersRepo.getById(id);

const create = ({ name, login, password }) =>
  usersRepo.create({ name, login, password });

const update = ({ id, name, login, password }) =>
  usersRepo.update({ id, name, login, password });

const deleteById = (id) => {
  tasksRepo.unassignUserTasks(id);
  return usersRepo.deleteById(id);
};

module.exports = { getAll, getById, create, update, deleteById };
