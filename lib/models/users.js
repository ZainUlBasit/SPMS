const { default: mongoose } = require("mongoose");

const userModel = new mongoose.Schema({
  email: String,
  password: String,
});

export const Users = mongoose.models.users || mongoose.model("users", userModel);
