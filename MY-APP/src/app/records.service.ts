import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1: string[] = ["Harish",'E234','at@abc.net']
  info2: string[] = ["Charan",'E235','sm@abc.net']
  info3: string[] = ["Ramesh",'E236','lm@abc.net']
  getinfo1(): string[]{
    return this.info1
  }
  getinfo2(): string[]{
    return this.info2
  }
  getinfo3(): string[]{
    return this.info3
  }
  constructor() { }
}
