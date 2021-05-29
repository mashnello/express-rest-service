const usersRepo = require('./user.memory.repository');
const tasksRepo = require('../tasks/task.memory.repository');

const getAll = () => usersRepo.getAll();

const getById = (id) => usersRepo.getById(id);

const create = (user) => usersRepo.create(user);

const update = (user) => usersRepo.update(user);

const deleteById = (id) => {
  tasksRepo.unassignUserTasks(id);
  return usersRepo.deleteById(id);
};

module.exports = { getAll, getById, create, update, deleteById };
