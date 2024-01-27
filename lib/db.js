import mongoose from "mongoose";

const { user, password } = process.env;
console.log(user, password);
// const encodedUser = encodeURIComponent(user);
// const encodedPassword = encodeURIComponent(password);
// export const MONGODB_URI =
//   "mongodb+srv://" +
//   user +
//   ":" +
//   password +
  // "@spms.rlzeira.mongodb.net/spms?retryWrites=true&w=majority";
export const MONGODB_URI = `mongodb://${user}:${password}@ac-vv06g8f-shard-00-00.rlzeira.mongodb.net:27017,ac-vv06g8f-shard-00-01.rlzeira.mongodb.net:27017,ac-vv06g8f-shard-00-02.rlzeira.mongodb.net:27017/?ssl=true&replicaSet=atlas-ukmcsb-shard-0&authSource=admin&retryWrites=true&w=majority`;

// db.js
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
