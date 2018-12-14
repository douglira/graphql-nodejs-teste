const mongoose = require('mongoose');
const { pubsub, EVENTS: USER_EVENTS } = require('../graphql/schema/user/subscription');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['admin', 'moderator', 'common'],
  },
});

UserSchema.post('save', (doc) => {
  /* eslint-disable-next-line */
  if (doc.__v === 0) {
    pubsub.publish(USER_EVENTS.USER_REGISTERED, doc);
  }

  return null;
});

mongoose.model('User', UserSchema);
