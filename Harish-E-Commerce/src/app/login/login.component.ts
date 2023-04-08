import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validator, FormControl, Validators } from '@angular/forms';
import { SignupService } from '../signup/signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  displayed: string[] = ['username', 'password'];

  Login = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  showdata = false;
  ldata: any;
  loginid: any;
  validLogin!: boolean;
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private getdata: SignupService) { }
  username!: string;
  password!: string;

  ngOnInit(): void {
    // this.getdata.getlogin(data: any).subscribe(data => {
    //   this.loginid = this.route.snapshot.paramMap.get("id");
    //   this.getdata.getlogin(this.loginid).subscribe((data: any) => {
    //     this.ldata = data;
    //     if (this.ldata) {

    //       this.Login.controls['username'].setValue(this.ldata.empname);
    //       this.Login.controls['password'].setValue(this.ldata.empcode);
    //     }
    //   });

    // });

  }
  login(): void {
    // if (this.username == 'admin' && this.password == 'admin') {
    //   this.validLogin = true;
    //   this.route.navigate(["/user"]);
    // } else {
    //   this.validLogin = false;
    //   console.log('Login Error');
    // }

  }
  icon() {
    this.showdata = true;
  }
}
