import express, { Express, Request, Response } from 'express';
import { User } from './models/User.model';

export const app: Express = express();

const PORT = '9090'

const usuario: User = new User('Raphael', 'rapha@email.com', '18', '134532')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/tasks', (req: Request, res: Response) => {
    res.send(usuario)
})

app.listen(PORT, () => console.log(`Server is run in ${PORT}`))