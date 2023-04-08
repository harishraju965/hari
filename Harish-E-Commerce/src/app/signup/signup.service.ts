import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  getSingleData(empid: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }
  signup(data: any) {

    return this.http.post<any>("http://localhost:3000/logindata", data);

  }
  getlogin(data: any) {
    return this.http.get<any>("http://localhost:3000/empdata");
  }

}
