import { Point } from './point';

export class Ellipse {
  constructor(public center: Point, public semiMajorAxis: number, public semiMinorAxis: number) {}

  calculateArea(): number {
    return Math.PI * this.semiMajorAxis * this.semiMinorAxis;
  }

  resetCenter(newCenter: Point): void {
    this.center = newCenter;
  }
}
