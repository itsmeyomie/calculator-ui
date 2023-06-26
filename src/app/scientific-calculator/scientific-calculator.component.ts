import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CalculatorService } from '../calculator/calculator.service';

@Component({
  selector: 'app-scientific-calculator',
  templateUrl: './scientific-calculator.component.html',
  styleUrls: ['./scientific-calculator.component.css']
})
export class ScientificCalculatorComponent {

  constructor(private route:Router){
 

  }
  
  
}
