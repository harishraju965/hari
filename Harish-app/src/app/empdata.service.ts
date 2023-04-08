import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpdataService {

  constructor() { }

  emp: any;

  emp_data() {

    return this.emp = [
      {
        name: "Ajit",
        age: 30
      },
      {
        name: "Harish",
        age: 35
      },
      {
        name: "Abhi",
        age: 35
      },
      {
        name: "Jai",
        age: 35
      },
      {
        name: "Bhushan",
        age: 35
      }

    ]
  }
}
