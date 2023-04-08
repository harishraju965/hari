import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name : string = "Hello World!!";
  today = Date();
  amount : number = 500;
  marks : number =56.66665;
  interest : number = 12.55556

}
