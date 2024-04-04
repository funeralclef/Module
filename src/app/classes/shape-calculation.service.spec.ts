import { TestBed } from '@angular/core/testing';
import { ShapeCalculationService } from './shape-calculation.service';

describe('ShapeCalculationService', () => {
  let service: ShapeCalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShapeCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate circle area correctly', () => {
    // Arrange
    const radius = 5;
    const expectedArea = Math.PI * Math.pow(radius, 2);

    // Act
    const area = service.calculateCircleArea(radius);

    // Assert
    expect(area).toBeCloseTo(expectedArea);
  });

  it('should calculate ring area correctly', () => {
    // Arrange
    const outerRadius = 10;
    const innerRadius = 5;
    const expectedOuterArea = Math.PI * Math.pow(outerRadius, 2);
    const expectedInnerArea = Math.PI * Math.pow(innerRadius, 2);
    const expectedArea = expectedOuterArea - expectedInnerArea;

    // Act
    const area = service.calculateRingArea(outerRadius, innerRadius);

    // Assert
    expect(area).toBeCloseTo(expectedArea);
  });

  it('should calculate ellipse area correctly', () => {
    // Arrange
    const semiMajorAxis = 10;
    const semiMinorAxis = 5;
    const expectedArea = Math.PI * semiMajorAxis * semiMinorAxis;

    // Act
    const area = service.calculateEllipseArea(semiMajorAxis, semiMinorAxis);

    // Assert
    expect(area).toBeCloseTo(expectedArea);
  });
});
