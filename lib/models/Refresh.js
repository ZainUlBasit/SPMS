const mongoose = require("mongoose");

const reqStr = {
  type: String,
  required: true,
};

const RefreshTokenSchema = mongoose.Schema({
  user_id: reqStr,
  token: reqStr,
});

export const Refresh = mongoose.models.refresh || mongoose.model("refresh", RefreshTokenSchema);
