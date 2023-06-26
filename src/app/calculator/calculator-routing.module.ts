import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorModule } from './calculator.module';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator.component';

const routes:Routes = [

  {
    path:'',
    component:CalculatorComponent
  }
  ]

  
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CalculatorRoutingModule { }
