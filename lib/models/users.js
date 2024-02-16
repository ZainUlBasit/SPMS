const { default: mongoose } = require("mongoose");

const userModel = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: Number, enum: [0, 1], required: true }, // 0: Admin, 1: OrderManager,
});

export const Users =
  mongoose.models.users || mongoose.model("users", userModel);
