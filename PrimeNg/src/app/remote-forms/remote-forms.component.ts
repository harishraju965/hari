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
    key: new FormControl,
    Pass: new FormControl
  });
  showData(data: any) {
    console.log(data)

  }
}
