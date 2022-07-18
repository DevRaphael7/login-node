import express, { Express, NextFunction, Request, Response } from 'express';
import 'dotenv/config'
import path from 'path';
import cors from 'cors';

export const app: Express = express();

app.use(cors())

import loginUser from './routes/loginUser.router';
import register from './routes/registerUser.router';
import login from './routes/login.router';
import gamers from './routes/gamers.router';

const { PORT } = process.env;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', cors({
    origin: 'http://localhost:9090',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}), loginUser);

app.use("/api", register)
app.use('/api', login)
app.use('/api', gamers)

app.use("/", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "./404/index.html"))
})

app.listen(PORT, () => console.log(`Server is run in ${PORT}`))