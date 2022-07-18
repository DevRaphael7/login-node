import { gamersData } from "../../data/gamers.data";
import { Gamers } from "../../models/gamers.model";
import { ImpGamerRepository } from "./gamers-repository.interface";

export class GamerRepository implements ImpGamerRepository {

    constructor() {}

    getGamers(): Gamers[] {
        return gamersData
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