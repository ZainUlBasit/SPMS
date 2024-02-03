const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const reqStr = {
  type: String,
  required: true,
};

const reqNum = {
  type: Number,
  required: true,
};

const reqDate = {
  type: Date,
  required: true,
};

const itemSchema = new Schema({
  name: reqStr,
  desc: reqStr,
  company: reqStr,
  purchasee: reqNum,
  sale: reqNum,
  qty: reqNum,
  addeddate: reqDate,
});

export const Items =
  mongoose.models.items || mongoose.model("items", itemSchema);
