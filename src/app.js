import express from "express";
import mongoose from "mongoose";
import professor from "./routes/UserRouter.js";
import { configDotenv } from "dotenv";

export const app = express();

const env = configDotenv()
const { DATABASE_URL } = env.parsed

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;
mongoose
  .connect(DATABASE_URL)
  .then(() => {
    console.log("Mongo conectado com sucesso");
  })
  .catch((err) => {
    console.log(`Erro ao conectar ao mongo: ${err}`);
  });

app.use("/users", professor);
