export class ScoreBoard {
  score: number;
  lives: number;

  constructor() {
      this.score = 0;
      this.lives = 3;
  }

  updateScore(points: number) {
      this.score += points;
  }

  loseLife() {
      this.lives -= 1;
  }
}
