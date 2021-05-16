const User = require('./user.model');
const { validateItemExists } = require('../../helpers/validation');

let USERS = [];

const getAll = async () => USERS;

const getById = async (id) => {
  validateItemExists(id, USERS);
  return USERS.find((item) => item.id === id);
};

const create = async (user) => {
  const aUser = new User(user);
  USERS.push(aUser);
  return aUser;
};

const update = async (user) => {
  validateItemExists(user.id, USERS);
  USERS = USERS.map((item) =>
    item.id === user.id ? { ...item, ...user } : item
  );
  return USERS.find((item) => item.id === user.id);
};

const deleteById = async (id) => {
  validateItemExists(id, USERS);
  USERS = USERS.filter((item) => item.id !== id);
  return {};
};

module.exports = { getAll, getById, create, update, deleteById };
