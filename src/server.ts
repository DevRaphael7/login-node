import express, { Express, Request, Response } from 'express';
import 'dotenv/config'

export const app: Express = express();

import loginUser from './routes/loginUser.router';
const { PORT } = process.env;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', loginUser)

app.listen(PORT, () => console.log(`Server is run in ${PORT}`))