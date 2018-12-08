const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'user',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    firstName: {
      type: GraphQLString,
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    role: {
      type: new GraphQLNonNull(GraphQLString),
      description: `ADMIN, MODERATOR, COMMON`,
    },
  }),
});
