
const { PubSub } = require('apollo-server-express');
const { UserType } = require('./type');

const pubsub = new PubSub();
const EVENTS = {
  USER_REGISTERED: 'USER_REGISTERED',
};

module.exports.pubsub = pubsub;
module.exports.EVENTS = EVENTS;
module.exports.subscription = {
  userRegistered: {
    type: UserType,
    resolve: ({ _id, firstName, email }) => ({
      _id,
      firstName,
      email,
    }),
    subscribe: () => pubsub.asyncIterator([EVENTS.USER_REGISTERED]),
  },
};
