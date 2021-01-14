const mongoose =require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    password: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

const Users = mongoose.model('Users', userSchema);
module.exports = Users;
