import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShapeResult } from '../classes/shape.interface';
import { ShapeCalculationService } from '../classes/shape-calculation.service';
import { Point } from '../classes/point';
import { Circle } from '../classes/circle';
import { Ring } from '../classes/ring';
import { Ellipse } from '../classes/ellipse';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  shapeResults: ShapeResult[] = [];
  shapeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private shapeCalculationService: ShapeCalculationService
  ) {
    this.shapeForm = this.formBuilder.group({
      circleCount: ['', Validators.required],
      ringCount: ['', Validators.required],
      ellipseCount: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.shapeForm.valid) {
      const circleCount = this.shapeForm.get('circleCount')?.value;
      const ringCount = this.shapeForm.get('ringCount')?.value;
      const ellipseCount = this.shapeForm.get('ellipseCount')?.value;

      this.generateShapeData(circleCount, ringCount, ellipseCount);
    }
  }

  generateShapeData(circleCount: number, ringCount: number, ellipseCount: number): void {
    for (let i = 0; i < circleCount; i++) {
      const radius = this.generateRandomNumber();
      const centerX = this.generateRandomNumber();
      const centerY = this.generateRandomNumber();
      const circle = new Circle(new Point(centerX, centerY), radius);
      this.addShapeResult(circle);
    }

    for (let i = 0; i < ringCount; i++) {
      const outerRadius = this.generateRandomNumber();
      const innerRadius = this.generateRandomNumber();
      const centerX = this.generateRandomNumber();
      const centerY = this.generateRandomNumber();
      const ring = new Ring(new Point(centerX, centerY), outerRadius, innerRadius);
      this.addShapeResult(ring);
    }

    for (let i = 0; i < ellipseCount; i++) {
      const semiMajorAxis = this.generateRandomNumber();
      const semiMinorAxis = this.generateRandomNumber();
      const centerX = this.generateRandomNumber();
      const centerY = this.generateRandomNumber();
      const ellipse = new Ellipse(new Point(centerX, centerY), semiMajorAxis, semiMinorAxis);
      this.addShapeResult(ellipse);
    }
  }

  generateRandomNumber(): number {
    return Math.floor(Math.random() * 100) + 1;
  }

  addShapeResult(shape: any): void {
    let area: number;

    if (shape instanceof Circle) {
      area = this.shapeCalculationService.calculateCircleArea(shape.radius);
    } else if (shape instanceof Ring) {
      area = this.shapeCalculationService.calculateRingArea(shape.outerRadius, shape.innerRadius);
    } else if (shape instanceof Ellipse) {
      area = this.shapeCalculationService.calculateEllipseArea(shape.semiMajorAxis, shape.semiMinorAxis);
    } else {
      console.error('Unsupported shape type:', shape);
      return;
    }

    const shapeResult: ShapeResult = {
      type: shape.constructor.name,
      area: area,
      details: shape
    };
    this.shapeResults.push(shapeResult);
  }
}
