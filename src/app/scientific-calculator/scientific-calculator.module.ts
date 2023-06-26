import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScientificCalculatorComponent } from './scientific-calculator.component';
import { ScientificCalculatorRoutingModule } from './scientific-calculator-routing.module';
import { CurrencyConverterComponent } from '../currency-converter/currency-converter.component';
import { TemperatureConverterComponent } from '../temperature-converter/temperature-converter.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ScientificCalculatorComponent,
    TemperatureConverterComponent,
    CurrencyConverterComponent
  ],
  imports: [
    CommonModule,
    ScientificCalculatorRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class ScientificCalculatorModule { }
