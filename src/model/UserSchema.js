import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: { type: String, require: true },
  lastName: { type: String, require: true },
});

mongoose.model("users", UserSchema);
