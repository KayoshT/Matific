import { Boat } from '../models/Boat';
import { Parachutist } from '../models/Parachutist';
import { ScoreBoard } from '../models/ScoreBoard';
import { GameView } from '../views/GameView';
import { EntityFactory } from '../factories/EntityFactory';

export class GameController {
    boat: Boat;
    parachutists: Parachutist[];
    obstacles: any[]; // Adjust as needed
    scoreBoard: ScoreBoard;
    view: GameView;
    intervalId: number | null;
    parachutistFactory: EntityFactory;
    obstacleFactory: EntityFactory;

    constructor(view: GameView, parachutistFactory: EntityFactory, obstacleFactory: EntityFactory) {
        this.boat = new Boat(view.canvas.width / 2, view.canvas.height - 30);
        this.parachutists = [];
        this.obstacles = [];
        this.scoreBoard = new ScoreBoard();
        this.view = view;
        this.intervalId = null;
        this.parachutistFactory = parachutistFactory;
        this.obstacleFactory = obstacleFactory;
    }

    startGame() {
        this.intervalId = setInterval(() => this.gameLoop(), 1000 / 60);
        document.addEventListener('keydown', (event) => this.handleKeyPress(event));
    }

    gameLoop() {
        this.updateGameState();
        this.view.render(this.parachutists, this.boat, this.scoreBoard, this.obstacles);
    }

    updateGameState() {
        this.parachutists.forEach(parachutist => {
            parachutist.fall();

            if (parachutist.y >= this.boat.y && parachutist.x >= this.boat.x && parachutist.x <= this.boat.x + 50) {
                parachutist.isCaught = true;
                this.scoreBoard.updateScore(10);
            }

            if (parachutist.y > this.view.canvas.height) {
                this.scoreBoard.loseLife();
                if (this.scoreBoard.lives <= 0) {
                    this.endGame();
                }
            }
        });

        this.parachutists = this.parachutists.filter(p => !p.isCaught);

        if (Math.random() < 0.01) {
            this.parachutists.push(this.parachutistFactory.createEntity(50));
        }

        this.obstacles.forEach(obstacle => obstacle.moveDown());
        this.obstacles.forEach(obstacle => {
            if (this.boat.x < obstacle.x + obstacle.width &&
                this.boat.x + 50 > obstacle.x &&
                this.boat.y < obstacle.y + obstacle.height &&
                this.boat.y + 20 > obstacle.y) {
                this.scoreBoard.loseLife();
                if (this.scoreBoard.lives <= 0) {
                    this.endGame();
                }
            }
        });

        this.obstacles = this.obstacles.filter(obstacle => obstacle.y < this.view.canvas.height);

        if (Math.random() < 0.01) {
            this.obstacles.push(this.obstacleFactory.createEntity(20));
        }
    }

    handleKeyPress(event: KeyboardEvent) {
        switch (event.key) {
            case 'ArrowLeft':
                this.boat.moveLeft();
                break;
            case 'ArrowRight':
                this.boat.moveRight();
                break;
        }
    }

    endGame() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        alert(`Game Over! Your score: ${this.scoreBoard.score}`);
    }
}
