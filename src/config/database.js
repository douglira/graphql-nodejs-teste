const path = require('path');
const mongoose = require('mongoose');

const { Types: { ObjectId } } = mongoose;
ObjectId.prototype.valueOf = function () {
  return this.toString();
};

module.exports = {
  uri: 'mongodb://localhost:27017',
  options: {
    dbName: 'graphql',
    // user: 'douglas',
    // pass: 'dockermongo',
    useNewUrlParser: true,
  },
  modelsPath: path.resolve('src', 'models'),
};
