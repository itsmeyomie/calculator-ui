import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScientificCalculatorComponent } from './scientific-calculator.component';
import { RouterModule, Routes } from '@angular/router';
import { TemperatureConverterComponent } from '../temperature-converter/temperature-converter.component';
import { CurrencyConverterComponent } from '../currency-converter/currency-converter.component';

const routes:Routes = [

  {
    path: '',
    component: ScientificCalculatorComponent
  },
  {
    path: 'c2f',
    component: TemperatureConverterComponent
  },
  {
    path:'usd-to-ksh',
    component: CurrencyConverterComponent
  }



]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class ScientificCalculatorRoutingModule { }
