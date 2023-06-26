import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CalculatorRoutingModule } from './calculator-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CalculatorRoutingModule,
    HttpClientModule
  ]
})
export class CalculatorModule { }
