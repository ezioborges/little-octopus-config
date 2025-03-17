import { app } from './app.js'
import dotenv from "dotenv"

const env = dotenv.config()
const { DATABASE_PORT } = env.parsed

app.listen(DATABASE_PORT, () => {
    console.log(`Servidor rodando na porta ${DATABASE_PORT}`);
})