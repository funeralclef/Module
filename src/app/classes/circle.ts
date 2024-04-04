import { Point } from './point';

export class Circle {
  constructor(public center: Point, public radius: number) {}

  calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }

  resetCenter(newCenter: Point): void {
    this.center = newCenter;
  }
}
