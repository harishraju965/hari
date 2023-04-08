import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validator, FormControl } from '@angular/forms';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signin = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    Mobile: ['', Validators.required],
    Email: ['', Validators.required]
  });
  constructor(private route: Router, private fb: FormBuilder, private sign: SignupService) { }
  username!: string;
  password!: string;
  Mobile!: number;
  Email!: string;
  ngOnInit(): void {
  }
  signup() {
    this.sign.signup(this.signin.value).subscribe({
      next: (res) => {
        alert("Data Addedd");
      },
      error: (err) => {
        alert("Error Occured");
      }
    });
  }

}
