const express = require('express');
const expressGraphql = require('express-graphql');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const { uri, options, modelsPath } = require('./src/config/database');

mongoose.connect(uri, options);
requireDir(modelsPath);

const schema = require('./src/graphql/schema');
const app = express();

app.use('/graphql', expressGraphql({
  schema,
  graphiql: true,
}));

app.listen('4000', () => console.log('Server running at port 4000'));
