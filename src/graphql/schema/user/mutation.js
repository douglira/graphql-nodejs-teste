const mongoose = require('mongoose');
const {
  GraphQLString,
} = require('graphql');

const UserType = require('./type');
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
  }
}
