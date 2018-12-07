const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
} = require('graphql');

const UserType = new GraphQLObjectType({
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

module.exports = UserType;
