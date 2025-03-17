import { app } from './app.js'
import { configDotenv } from 'dotenv'

const env = configDotenv()
const { DATABASE_PORT } = env.parsed

app.listen(DATABASE_PORT, () => {
    console.log(`Servidor rodando na porta ${DATABASE_PORT}`);
})