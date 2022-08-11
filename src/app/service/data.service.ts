import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 counter:number=100;
  constructor() { }
  addOne(){
    this.counter++

  }
  lessOne(){
    this.counter--
  }
 
}
