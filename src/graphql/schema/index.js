const {
  GraphQLSchema,
  GraphQLObjectType,
} = require('graphql');

const { UserQuery, UserMutation, UserSubscription } = require('./user');

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    ...UserQuery,
  },
});

const RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  fields: {
    ...UserMutation,
  },
});

const RootSubscription = new GraphQLObjectType({
  name: 'RootSubscription',
  fields: {
    ...UserSubscription,
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
  subscription: RootSubscription,
});
