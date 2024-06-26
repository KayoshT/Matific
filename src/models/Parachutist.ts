export class Parachutist {
  x: number;
  y: number;
  isCaught: boolean;

  constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
      this.isCaught = false;
  }

  fall() {
      this.y += 2;
  }
}
