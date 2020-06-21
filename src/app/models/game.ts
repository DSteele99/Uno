import { Card } from './card';

export class Game {
    players: string[];
    turn: string[];
    clockwise: boolean;
    dropPile: Card[];
    game: Card[];
}
