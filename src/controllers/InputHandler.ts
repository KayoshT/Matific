import { Command } from '../commands/Command';

export class InputHandler {
    private moveLeftCommand: Command;
    private moveRightCommand: Command;

    constructor(moveLeftCommand: Command, moveRightCommand: Command) {
        this.moveLeftCommand = moveLeftCommand;
        this.moveRightCommand = moveRightCommand;
    }

    handleInput(input: string) {
        if (input === 'ArrowLeft') {
            this.moveLeftCommand.execute();
        } else if (input === 'ArrowRight') {
            this.moveRightCommand.execute();
        }
    }
}
