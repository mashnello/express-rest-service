const validateItemExists = (id, list) => {
  const isExisting = list.find((item) => item.id === id);
  if (!isExisting) {
    throw new Error('Not found');
  }
};

module.exports = { validateItemExists };
