import { Component } from '@angular/core';
import { ScientificCalculatorService } from '../scientific-calculator/scientific-calculator.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-temperature-converter',
  templateUrl: './temperature-converter.component.html',
  styleUrls: ['./temperature-converter.component.css']
})
export class TemperatureConverterComponent {

  public numberToCovert: number = 0;
  public afterCovertion: number = 0;

  constructor(private temperarureService: ScientificCalculatorService) { }

  public subscription: Subscription = new Subscription()



  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  public convert() {
   const temperatureSubscription= this.temperarureService.temperatureConversion(this.numberToCovert).subscribe(value=>
      this.afterCovertion=value
    )
   return this.subscription.add(temperatureSubscription)
  }

}
