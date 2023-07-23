import mongoose from "mongoose";

export function connectDB() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Mongo DB Connection Successfull!!");
    });

    connection.on("error", (error) => {
      console.log("Mongo DB Connection Failed!");
      console.log(error);
    });
  } catch (error) {
    console.log(error);
  }
}
