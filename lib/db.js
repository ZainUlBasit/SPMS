import mongoose from "mongoose";

const { user, password } = process.env;
const DATABASE_NAME = "spms"; // Your database name
// const MONGODB_URI_UPDATED = `mongodb://${user}:${password}@ac-6r4tbxz-shard-00-00.56uweeh.mongodb.net:27017,ac-6r4tbxz-shard-00-01.56uweeh.mongodb.net:27017,ac-6r4tbxz-shard-00-02.56uweeh.mongodb.net:27017/${DATABASE_NAME}?ssl=true&replicaSet=atlas-ieokp5-shard-0&authSource=admin&retryWrites=true&w=majority`;
const newone =
  "mongodb://"+user+":"+password+"@ac-vv06g8f-shard-00-00.rlzeira.mongodb.net:27017,ac-vv06g8f-shard-00-01.rlzeira.mongodb.net:27017,ac-vv06g8f-shard-00-02.rlzeira.mongodb.net:27017/"+DATABASE_NAME+"?ssl=true&replicaSet=atlas-ukmcsb-shard-0&authSource=admin&retryWrites=true&w=majority";

// db.js
const connectDB = async () => {
  try {
    await mongoose.connect(newone);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
