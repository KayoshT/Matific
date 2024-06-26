import { Command } from './Command';
import { Boat } from '../models/Boat';

export class MoveRightCommand implements Command {
    private boat: Boat;

    constructor(boat: Boat) {
        this.boat = boat;
    }

    execute() {
        this.boat.moveRight();
    }
}
