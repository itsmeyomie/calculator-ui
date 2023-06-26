import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CalculatorService } from './calculator.service';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnDestroy, OnInit {
  public numOne: number = 0;
  public numTwo: number = 0;
  public sum: number = 0;
  public subscription: Subscription = new Subscription();


  constructor(private route: Router, private service: CalculatorService) { }
  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

  }


  public add() {
    const additionSubscription = this.service.add(this.numOne, this.numTwo).subscribe(
      result => {
        this.sum = result
      }
    )
   return this.subscription.add(additionSubscription);
  }

  public subtract() {
    const subtractionSubscription = this.service.subtract(this.numOne, this.numTwo).subscribe(
      result => this.sum = result
    )
   return this.subscription.add(subtractionSubscription);
  }

  public divide() {
    const divisionSubscription = this.service.divide(this.numOne, this.numTwo).subscribe(
      result => this.sum = result
    )
   return this.subscription.add(divisionSubscription);
  }

  public multiply() {
    const multiplicatinSubscription4 = this.service.multiply(this.numOne, this.numTwo).subscribe(
      result => this.sum = result
    )
   return this.subscription.add(multiplicatinSubscription4);
  }

  public clear(): void {
    this.numOne = 0;
    this.numTwo = 0;

  }
  public clears(): void {
    this.sum = 0;
    this.numOne = 0;
    this.numTwo = 0;
  }



  public goTosciCalc(): void {
    this.route.navigate(['scientific-calculator'])
  }




}
