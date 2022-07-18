import { Request, Response } from "express";
import { ResponseApi } from "../../models/responseHttp.model";
import { GamerRepository } from "../../repository/gamersRepository/gamer.repository";

export class GamerController {

    static respostaBackEnd: ResponseApi<null> = {
        code: 400,
        message: "",
        operation: false
    }

    private static repository: GamerRepository = new GamerRepository();

    constructor() { }

    public static getGamers(req: Request, res: Response): void {
        const gamers = GamerController.repository.getGamers();
        res.status(200).json(gamers);
    }

    getGamersById(id: number): void {
        throw new Error("Method not implemented.");
    }

    getGamersByYeah(yeah: string): void {
        throw new Error("Method not implemented.");
    }

    getGamersByName(name: string): void {
        throw new Error("Method not implemented.");
    }

}