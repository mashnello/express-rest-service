"use strict";
const boardsRepo = require('./board.memory.repository');
const tasksRepo = require('../tasks/task.memory.repository');
const getAll = () => boardsRepo.getAll();
const getById = (id) => boardsRepo.getById(id);
const create = (board) => boardsRepo.create(board);
const update = (board) => boardsRepo.update(board);
const deleteById = (id) => {
    tasksRepo.deleteByBoardId(id);
    return boardsRepo.deleteById(id);
};
module.exports = { getAll, getById, create, update, deleteById };
