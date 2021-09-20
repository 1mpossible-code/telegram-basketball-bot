import mongoose, {Document} from 'mongoose';
import {IPlayer} from './Player';

export interface IGame extends Document {
    _id: string;
    maxScore: number;
    turn: number;
    owner: IPlayer;
    players: IPlayer[];
}

const GameSchema = new mongoose.Schema({
    _id: String,
    maxScore: Number,
    turn: Number,
    owner: {
        type: String,
        ref: 'Player',
    },
    players: [
        {
            type: String,
            ref: 'Player',
        },
    ],
});

const Game = mongoose.model<IGame>('Game', GameSchema);
export default Game;
