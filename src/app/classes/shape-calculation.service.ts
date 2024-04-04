import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShapeCalculationService {

  constructor() { }

  calculateCircleArea(radius: number): number {
    return Math.PI * Math.pow(radius, 2);
  }

  calculateRingArea(outerRadius: number, innerRadius: number): number {
    const outerArea = Math.PI * Math.pow(outerRadius, 2);
    const innerArea = Math.PI * Math.pow(innerRadius, 2);
    return outerArea - innerArea;
  }

  calculateEllipseArea(semiMajorAxis: number, semiMinorAxis: number): number {
    return Math.PI * semiMajorAxis * semiMinorAxis;
  }
}

