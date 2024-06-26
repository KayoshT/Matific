import { Command } from './Command';
import { Boat } from '../models/Boat';

export class MoveLeftCommand implements Command {
    private boat: Boat;

    constructor(boat: Boat) {
        this.boat = boat;
    }

    execute() {
        this.boat.moveLeft();
    }
}
