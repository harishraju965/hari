import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-remote-forms',
  templateUrl: './remote-forms.component.html',
  styleUrls: ['./remote-forms.component.css']
})
export class RemoteFormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  sampleform = new FormGroup({
    amount: new FormControl,
    percent: new FormControl,
    duration: new FormControl
  });


  showData(data: any) {
    console.log(data);
  }
  loanAmount: number = 100000;
  interest: number = 12;
  emi: number = 0;

  result: number = 0;

  finalInterest: number = 0;

  lastInterest: number = 0;

  tenure: number = 24;

  cal() {
    this.finalInterest = this.interest / 12 / 100;

    this.lastInterest = (1 + this.finalInterest)

    this.result = (this.loanAmount * (this.finalInterest)) * Math.pow(this.lastInterest, this.tenure) / ((Math.pow(this.lastInterest, this.tenure)) - 1);

  }

}

