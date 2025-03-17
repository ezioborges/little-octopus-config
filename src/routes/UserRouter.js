import express from "express";
import mongoose from "mongoose";
import "../model/UserSchema.js";

const User = mongoose.model("users-config");

const router = express.Router();

router.post("/", (req, res) => {
  const newUser = {
    name: req.body.name,
    lastName: req.body.lastName
  }

  new User(newUser).save().then(() => {
    console.log('Usuário cadastrado com sucesso!');
  }).catch(err => {
    console.log(`Erro ao cadastar usuário: ${err}`);
  })

  console.log(newUser);
  
  return res.status(201).send();
});

router.get('/', async (req, res) => {
  const users = await User.find()

  res.status(200).send({ users })
})

export default router;
