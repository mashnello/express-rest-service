const { v4: uuid } = require('uuid')

const USERS = [];

const getAll = async () => USERS;

const getById = async (id) => USERS.find((user) => user.id === id);

const create = async ({ name, login, password }) => {
  const user = { id: uuid(), name, login, password };
  USERS.push(user);
  return user;
}

const update = async ({ id, name, login, password }) => {
  const user = USERS.find((usr) => usr.id === id);
  user.name = name || user.name;
  user.login = login || user.login;
  user.password = password || user.password;
  return user;
}

const deleteById = async (id) => {
  const index = USERS.findIndex((usr) => usr.id === id);
  USERS.splice(index, 1);
  return {};
}

module.exports = { getAll, getById, create, update, deleteById };
