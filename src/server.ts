import express, { Express, Request, Response } from 'express';
import 'dotenv/config'

export const app: Express = express();

import loginUser from './routes/loginUser.router';
import register from './routes/registerUser.router';
const { PORT } = process.env;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', loginUser)
app.use("/api", register)

app.listen(PORT, () => console.log(`Server is run in ${PORT}`))