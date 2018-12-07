const {
  GraphQLNonNull,
  GraphQLList,
  GraphQLString,
} = require('graphql');

const UserType = require('./type');
const UserResolver = require('./resolver');

const UserQuery = {
  user: {
    type: UserType,
    args: {
      id: {
        name: 'id',
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve: UserResolver.findOne,
  },
  users: {
    type: new GraphQLList(UserType),
    args: {},
    resolve: UserResolver.findAll,
  },
};

const UserMutation = {
  userCreate: {
    type: UserType,
    args: {
      firstName: { type: GraphQLString },
      email: { type: GraphQLString },
      role: { type: GraphQLString },
    },
    resolve: UserResolver.create,
  },
};

module.exports.UserQuery = UserQuery;
module.exports.UserMutation = UserMutation;
