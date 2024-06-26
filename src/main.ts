import { GameView } from './views/GameView';
import { GameController } from './controllers/GameController';
import { ParachutistFactory } from './factories/ParachutistFactory';
import { ObstacleFactory } from './factories/ObstacleFactory';
import { Boat } from './models/Boat';
import { MoveLeftCommand } from './commands/MoveLeftCommand';
import { MoveRightCommand } from './commands/MoveRightCommand';
import { InputHandler } from './controllers/InputHandler';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
    const gameView = new GameView(canvas);
    const parachutistFactory = new ParachutistFactory();
    const obstacleFactory = new ObstacleFactory();
    const gameController = new GameController(gameView, parachutistFactory, obstacleFactory);
    
    const boat = new Boat(canvas.width / 3, canvas.height - 30);
    const moveLeftCommand = new MoveLeftCommand(boat);
    const moveRightCommand = new MoveRightCommand(boat);
    const inputHandler = new InputHandler(moveLeftCommand, moveRightCommand);

    document.addEventListener('keydown', (event) => inputHandler.handleInput(event.key));
    console.log("g")
    gameController.startGame();
});
