import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-calc',
  templateUrl: './simple-calc.component.html',
  styleUrls: ['./simple-calc.component.css']
})
export class SimpleCalcComponent implements OnInit {
  result: number | undefined;
  output: any;

  constructor() { }

  ngOnInit(): void {
  }
  Number1: number = 0;
  Number2: number = 0;
  display: number = 0;
  add() {
    this.result = this.Number1 + this.Number2;
    this.output = this.result;
  }
  sub() {
    this.result = this.Number1 - this.Number2;
    this.output = this.result;
  }
  mul() {
    this.result = this.Number1 * this.Number2;
    this.output = this.result;
  }
  div() {
    this.result = this.Number1 / this.Number2;
    this.output = this.result;
  }

}
