import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validator, FormControl, Validators } from '@angular/forms';
import { EmpService } from '../services/emp.service';



@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.scss']
})
export class AddempComponent implements OnInit {


  langs: any[] = ["PHP", "Java", ".NET", "Angular", "React"];





  constructor(private fb: FormBuilder, private empsave: EmpService) { }

  // addemp!: FormGroup;

  addemp = this.fb.group({
    empname: ['', Validators.required],
    empcode: ['', Validators.required],
    age: ['', Validators.required],
    klang: [''],
    pcomp: [''],
    date: [''],
    psal: ['']
  });


  ngOnInit(): void {
  }

  saveemp() {

    // console.log(this.addemp.value);
    this.empsave.saveemp(this.addemp.value).subscribe({


    });


  }

}
