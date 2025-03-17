import express from "express";
import mongoose from "mongoose";
import "../model/UserSchema.js";

const User = mongoose.model("users");

const router = express.Router();

router.get("/", (req, res) => {
  return res.status(201).send({ message: "Aqui esta funcionando" });
});

export default router;
