import { TestBed } from '@angular/core/testing';

import { ScientificCalculatorService } from './scientific-calculator.service';

describe('ScientificCalculatorService', () => {
  let service: ScientificCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScientificCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
