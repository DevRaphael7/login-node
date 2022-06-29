import express, { Express, NextFunction, Request, Response } from 'express';
import 'dotenv/config'
import path from 'path';

export const app: Express = express();

import loginUser from './routes/loginUser.router';
import register from './routes/registerUser.router';
import login from './routes/login.router';
const { PORT } = process.env;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', loginUser)
app.use("/api", register)
app.use('/api', login)

app.use("/", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "./404/index.html"))
})

app.listen(PORT, () => console.log(`Server is run in ${PORT}`))