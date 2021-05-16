const { v4: uuid } = require('uuid');

let USERS = [];

const getAll = async () => USERS;

const getById = async (id) => USERS.find((user) => user.id === id);

const create = async (user) => {
  const userWithId = { ...user, id: uuid() };
  USERS.push(userWithId);
  return userWithId;
};

const update = async (user) => {
  USERS = USERS.map((item) =>
    item.id === user.id ? { ...item, ...user } : item
  );
  return USERS.find((item) => item.id === user.id);
};

const deleteById = async (id) => {
  USERS = USERS.filter((item) => item.id !== id);
  return {};
};

module.exports = { getAll, getById, create, update, deleteById };
