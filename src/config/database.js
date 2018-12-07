const path = require('path');

module.exports = {
  uri: 'mongodb://localhost:27017',
  options: {
    dbName: 'graphql',
    user: 'douglas',
    pass: 'dockermongo',
    useNewUrlParser: true,
  },
  modelsPath: path.resolve('src', 'models'),
};