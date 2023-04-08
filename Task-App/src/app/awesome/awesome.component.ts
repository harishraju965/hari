import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awesome',
  templateUrl: './awesome.component.html',
  styleUrls: ['./awesome.component.css']
})
export class AwesomeComponent implements OnInit {

  title = "Hello";

  // let names:string[];

  // let names = ["Ajit","Harsih"];

  constructor() { }

  ngOnInit(): void {
  }

}
