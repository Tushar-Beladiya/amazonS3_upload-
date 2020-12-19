import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
   email: String,
   password: String,
   firstname: String,
   lastname: String,
   avatar: String,
});

export const userModel = mongoose.model("user", userSchema);

// export default userModel;
