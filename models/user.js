import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var user = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: true
  },
  cover: {
    type: String
  },
  bio: {
    type: String
  },
  phone: {
    type: String
  }
});

mongoose.models = {};

var User = mongoose.model('User', user);

export default User;