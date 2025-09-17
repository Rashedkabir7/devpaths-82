import { Router } from "express";
import User from "../models/User.js";

const router = Router();

// Get all users
router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Update role
router.put("/users/:id/role", async (req, res) => {
  const { role } = req.body;
  const user = await User.findByIdAndUpdate(req.params.id, { role }, { new: true });
  req.app.get("io").emit("roleUpdated", { id: user._id, role: user.role });
  res.json(user);
});

// Update progress
router.put("/progress/:id", async (req, res) => {
  const { completedTopics, percentage } = req.body;
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { progress: { completedTopics, percentage } },
    { new: true }
  );
  req.app.get("io").emit("progressUpdated", { id: user._id, progress: user.progress });
  res.json(user);
});

export default router;
