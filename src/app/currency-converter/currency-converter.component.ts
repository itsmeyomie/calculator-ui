import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { ScientificCalculatorService } from '../scientific-calculator/scientific-calculator.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnDestroy {
  public CurrencyToCovert: number = 0;
  public afterCovertion: number = 0;

  constructor(private currencyService: ScientificCalculatorService) { }

  public subscription: Subscription = new Subscription()



  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }



  public convert(): void {
    const currencySubscription = this.currencyService.currencyConversion(this.CurrencyToCovert).subscribe(value => {
      this.afterCovertion = value
      alert(value)
    }
    )
   return this.subscription.add(currencySubscription);
  }

}
