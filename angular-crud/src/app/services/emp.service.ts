import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private http: HttpClient) { }

  saveemp(data: any) {

    return this.http.post<any>("http://localhost:4000/empdata", data);


  }

  getemp() {
    return this.http.get<any>("http://localhost:4000/empdata");
  }
  del(id: any) {
    return this.http.delete<any>("http://localhost:4000/empdata/" + id)
  }
}
