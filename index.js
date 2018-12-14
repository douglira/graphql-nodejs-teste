const { createServer } = require('http');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const { port } = require('./src/config/server');
const { uri, options, modelsPath } = require('./src/config/database');

mongoose.connect(uri, options);
requireDir(modelsPath);

const schema = require('./src/graphql/schema');

const app = express();
app.use(express.json());

const apolloServer = new ApolloServer({
  schema,
});
apolloServer.applyMiddleware({ app, path: '/app/graphql' });

const httpServer = createServer(app);
apolloServer.installSubscriptionHandlers(httpServer);

httpServer.listen(({ port }), () => console.log(`Server running at ${apolloServer.graphqlPath}`));
