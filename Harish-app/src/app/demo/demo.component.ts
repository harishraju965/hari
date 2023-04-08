import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpdataService } from '../empdata.service';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private empd: EmpdataService) {

    this.empdata = empd.emp_data();
  }

  pid: any = 0;

  empdata: any;



  ngOnInit(): void {

    this.pid = this.route.snapshot.paramMap.get('id');

  }
  @Input() id: number = 10;
  @Input() city: string = "Hyderabad";

  name = "Harish"
  isOkay = true;
  emp = [
    {
      name: "Harish",
      age: 27,
    },
    {
      name: "Harish",
      age: 27,
    }
  ]
  var_name: number = 10;
  var_city: string = "Hyderabad"
}
