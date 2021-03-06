const {
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
} = require('graphql');
const mongoose = require('mongoose');
const { UserType } = require('./type');

const UserMongoose = mongoose.model('User');

module.exports = {
  findOne: {
    type: UserType,
    args: {
      id: {
        name: 'id',
        type: new GraphQLNonNull(GraphQLID),
      },
    },
    resolve: async (root, { id }, context, info) => {
      const user = await UserMongoose.findById(id);
      return user.toObject();
    },
  },
  findAll: {
    type: new GraphQLList(UserType),
    args: {},
    resolve: async (root, args, context, info) => {
      const users = await UserMongoose.find({});
      return users;
    },
  },
};
