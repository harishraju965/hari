import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {

 

  constructor() { }

  ngOnInit(): void {
  }

  sample = 0;

  num2:number = 5;

  num1:number = 10;

  age:any;


  iage: any;

  demo(iage:any){
      alert("Buttton Clicked");
    

      this.sample = this.num1*this.num2;
      this.sample++;
     this.age =iage;

     // console.log(input_age);

   }

  inpual : any;

keys(input_val:any)
{
  console.error(input_val);
}

blur_event(){
  alert("Blue Event Executed");
}

focus_event(){
  alert("Focus Event Executed");
}
result: any = 0;
 getOnchange(){
  this.result++;
 }
date: any = 0;
getDate(){
  this.date = Date.now();
}
isTrue: any = true;
vtoggle: any = "Demo";
toggle(){
  this.vtoggle = 10;
  this.isTrue = !this.isTrue;
  alert();
}


name: any = null;
phone: any = null;
showData(data:any){
  console.log(data);
  this.name = data.user;
  this.phone = data.phone;
}

tasks: any[] = [];
getTask(item:string){
  console.log(item);
  this.tasks.push({id:this.tasks.length,name:item});
  console.warn(this.tasks);
}

}

