import { Point } from './point';
import { Circle } from './circle';

export class Ring extends Circle {
  constructor(center: Point, public outerRadius: number, public innerRadius: number) {
    super(center, outerRadius);
  }

  override calculateArea(): number {
    const outerArea = super.calculateArea();
    const innerArea = Math.PI * Math.pow(this.innerRadius, 2);
    return outerArea - innerArea;
  }
}
