const { v4: uuid } = require('uuid');

let TASKS = [];

const getAll = async (boardId) =>
  TASKS.filter((task) => task.boardId === boardId);

const getById = async (boardId, id) =>
  TASKS.find((task) => task.boardId === boardId && task.id === id);

const create = async ({
  title,
  order,
  description,
  userId,
  boardId,
  columnId,
}) => {
  const task = {
    id: uuid(),
    title,
    order,
    description,
    userId,
    boardId,
    columnId,
  };
  TASKS.push(task);
  return task;
};

const update = async ({
  id,
  title,
  order,
  description,
  userId,
  boardId,
  columnId,
}) => {
  const task = TASKS.find((item) => item.id === id);
  task.title = title || task.title;
  task.order = order || task.order;
  task.description = description || task.description;
  task.userId = userId || task.userId;
  task.boardId = boardId || task.boardId;
  task.columnId = columnId || task.columnId;
  return task;
};

const deleteById = async (boardId, id) => {
  const index = TASKS.findIndex(
    (item) => item.boardId === boardId && item.id === id
  );
  TASKS.splice(index, 1);
  return {};
};

const deleteByBoardId = async (boardId) => {
  TASKS = TASKS.filter((item) => item.boardId !== boardId);
  return {};
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
  deleteByBoardId,
};
