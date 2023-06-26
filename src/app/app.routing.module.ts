import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes= [

  {
    path: 'scientific-calculator',
    loadChildren: () => import('./scientific-calculator/scientific-calculator.module').then(m=>m.ScientificCalculatorModule)
  },


  {
    path:'calculator',
    loadChildren: () => import('./calculator/calculator.module').then(m=>m.CalculatorModule)
  },
]


@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
