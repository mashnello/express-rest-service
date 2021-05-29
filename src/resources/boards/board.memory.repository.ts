const Board = require('./board.model');
const { validateItemExists } = require('../../helpers/validation');

let BOARDS = [];

const getAll = async () => BOARDS;

const getById = async (id) => {
  validateItemExists(id, BOARDS);
  return BOARDS.find((board) => board.id === id);
};

const create = async (board) => {
  const aBoard = new Board(board);
  BOARDS.push(aBoard);
  return aBoard;
};

const update = async (board) => {
  validateItemExists(board.id, BOARDS);
  BOARDS = BOARDS.map((item) =>
    item.id === board.id ? { ...item, ...board } : item
  );
  return BOARDS.find((item) => item.id === board.id);
};

const deleteById = async (id) => {
  validateItemExists(id, BOARDS);
  BOARDS = BOARDS.filter((item) => item.id !== id);
  return {};
};

module.exports = { getAll, getById, create, update, deleteById };
