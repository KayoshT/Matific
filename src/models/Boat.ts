export class Boat {
  x: number;
  y: number;

  constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
  }

  moveLeft() {
      this.x -= 5;
  }

  moveRight() {
      this.x += 5;
  }
}
