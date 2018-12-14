const mongoose = require('mongoose');
const {
  GraphQLString,
  GraphQLNonNull,
} = require('graphql');

const { UserType, UserInputType } = require('./type');

const UserMongoose = mongoose.model('User');

module.exports = {
  create: {
    type: UserType,
    args: {
      firstName: { type: GraphQLString },
      email: { type: GraphQLString },
      role: { type: GraphQLString },
    },
    resolve: async (root, { firstName, email, role }) => {
      const user = await UserMongoose.create({ firstName, email, role });
      return user.toObject();
    },
  },

  update: {
    type: UserType,
    args: {
      input: {
        type: new GraphQLNonNull(UserInputType),
      },
    },
    resolve: async (root, { input: userInput }) => {
      const user = await UserMongoose.findByIdAndUpdate(userInput._id, {
        firstName: userInput.firstName,
        email: userInput.email,
      }, { lean: true, new: true });
      return user;
    },
  },
};
