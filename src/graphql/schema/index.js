const { 
  GraphQLSchema,
  GraphQLObjectType,
} = require('graphql');

const { UserQuery, UserMutation } = require('./user');

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: {
    ...UserQuery,
  },
});

const RootMutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...UserMutation,
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});
