const { v4: uuid } = require('uuid');

const BOARDS = [];

const getAll = async () => BOARDS;

const getById = async (id) => BOARDS.find((board) => board.id === id);

const create = async ({ title, columns }) => {
  const board = {
    id: uuid(),
    title,
    columns,
  };
  BOARDS.push(board);
  return board;
};

const update = async ({ id, title, columns }) => {
  const board = BOARDS.find((item) => item.id === id);
  board.title = title || board.title;
  board.columns = columns || board.columns;
  return board;
};

const deleteById = async (id) => {
  const index = BOARDS.findIndex((item) => item.id === id);
  BOARDS.splice(index, 1);
  return {};
};

module.exports = { getAll, getById, create, update, deleteById };
