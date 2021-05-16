const { v4: uuid } = require('uuid');
const { validateItemExists } = require('../../helpers/validation');

let TASKS = [];

const getAll = async (boardId) =>
  TASKS.filter((task) => task.boardId === boardId);

const getById = async (boardId, id) => {
  validateItemExists(id, TASKS);
  return TASKS.find((task) => task.boardId === boardId && task.id === id);
};

const create = async (task) => {
  const taskWithId = { ...task, id: uuid() };
  TASKS.push(taskWithId);
  return taskWithId;
};

const update = async (task) => {
  validateItemExists(task.id, TASKS);
  TASKS = TASKS.map((item) =>
    item.id === task.id ? { ...item, ...task } : item
  );
  return TASKS.find((item) => item.id === task.id);
};

const deleteById = async (boardId, id) => {
  validateItemExists(id, TASKS);
  TASKS = TASKS.filter((item) => !(item.boardId === boardId && item.id === id));
  return {};
};

const deleteByBoardId = async (boardId) => {
  TASKS = TASKS.filter((item) => item.boardId !== boardId);
  return {};
};

const unassignUserTasks = async (userId) => {
  TASKS = TASKS.map((item) => ({
    ...item,
    userId: item.userId === userId ? null : item.userId,
  }));
  return {};
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
  deleteByBoardId,
  unassignUserTasks,
};
