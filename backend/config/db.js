import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://masood:masood3288@cluster0.odud1zk.mongodb.net/food-delivery"
    )
    .then(() => console.log("DB Connected!"));
};
