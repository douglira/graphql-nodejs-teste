const mongoose = require('mongoose');
const { Types: { ObjectId } } = mongoose;
ObjectId.prototype.valueOf = function () {
	return this.toString();
};

const UserMongoose = mongoose.model('User');

const UserResolver = {
  create: async (root, { firstName, email, role }) => {
    const user = await UserMongoose.create({ firstName, email, role });
    return user.toObject();
  },
  findOne: async (root, { id }, context, info) => {
    const result = await UserMongoose.findById(id);
    return result.toObject();
  },
  findAll: async (root, args, context, info) => {
    return [];
  },
};

module.exports = UserResolver;