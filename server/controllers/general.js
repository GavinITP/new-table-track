import User from "../models/User.js";
import { ObjectId } from "mongodb";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = new ObjectId(id);
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
