import express from "express";
import mongoose from "mongoose";
import professor from "./routes/UserRouter.js";

export const app = express();
export const port = 2424;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/octopus")
  .then(() => {
    console.log("Mongo conectado com sucesso");
  })
  .catch((err) => {
    console.log(`Erro ao conectar ao mongo: ${err}`);
  });

app.use("/users", professor);
