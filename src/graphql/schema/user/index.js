const mutation = require('./mutation');
const resolver = require('./resolver');

const UserQuery = {
  user: resolver.findOne,
  users: resolver.findAll,
};

const UserMutation = {
  userCreate: mutation.create,
};

module.exports.UserQuery = UserQuery;
module.exports.UserMutation = UserMutation;
