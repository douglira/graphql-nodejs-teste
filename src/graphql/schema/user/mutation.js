const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
} = require('graphql');

const UserType = require('./type');
const UserResolver = require('./resolver');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {}
});

module.exports = mutation;
