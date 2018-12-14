const mutation = require('./mutation');
const resolver = require('./resolver');
const { subscription } = require('./subscription');

const UserQuery = {
  user: resolver.findOne,
  users: resolver.findAll,
};

const UserMutation = {
  userCreate: mutation.create,
  userUpdate: mutation.update,
};

const UserSubscription = {
  userRegistered: subscription.userRegistered,
};

module.exports.UserQuery = UserQuery;
module.exports.UserMutation = UserMutation;
module.exports.UserSubscription = UserSubscription;
