import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BMIComponent implements OnInit {
  result: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }
  weight: number = 70;
  height: number = 1.80;
  BMI: number = 0;
  output: string = "";
  measure() {
    // this.height = this.height * this.height;
    this.result = this.weight / (this.height * this.height);
    console.log(this.result);
    if (this.result < 18.9) {

      this.output = "Under Weight";


    }

    else if (this.result > 19 && this.result < 24.9) {
      this.output = "Normal Weight";

    }
    else if (this.result > 25 && this.result < 29.9) {
      this.output = "overweight";
    }
    else if (this.result > 30) {
      this.output = "obesity";
    }
  }



}
