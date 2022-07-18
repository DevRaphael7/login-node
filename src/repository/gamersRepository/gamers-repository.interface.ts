import { Gamers } from "../../models/gamers.model";

export interface ImpGamerRepository {
    getGamers(): Gamers[];
    getGamersById(id: number): void;
    getGamersByYeah(yeah: string): void;
    getGamersByName(name: string): void;
}