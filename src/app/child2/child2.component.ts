import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  providers:[DataService]
 
})
export class Child2Component implements OnInit {

  constructor( public dataService:DataService) { }

  ngOnInit(): void {
  }
  decrease(){
    this.dataService.lessOne();
  }

}
