import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  provider: String,
  providerId: String,
  avatar: String,
  role: { type: String, default: "user" },
  progress: {
    completedTopics: { type: Number, default: 0 },
    percentage: { type: Number, default: 0 },
  },
});

export default mongoose.model("User", UserSchema);
