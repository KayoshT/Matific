import { Boat } from '../models/Boat';
import { Parachutist } from '../models/Parachutist';
import { ScoreBoard } from '../models/ScoreBoard';

export class GameView {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d')!;
    }

    render(parachutists: Parachutist[], boat: Boat, scoreBoard: ScoreBoard, obstacles: any[]) {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Render boat
        this.context.fillRect(boat.x, boat.y, 50, 20);

        // Render parachutists
        parachutists.forEach(parachutist => {
            this.context.fillRect(parachutist.x, parachutist.y, 10, 10);
        });

        // Render obstacles
        obstacles.forEach(obstacle => {
            this.context.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        });

        // Render score and lives
        this.context.fillText(`Score: ${scoreBoard.score}`, 10, 20);
        this.context.fillText(`Lives: ${scoreBoard.lives}`, 10, 40);
    }
}
