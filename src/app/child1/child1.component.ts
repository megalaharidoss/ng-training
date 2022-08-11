import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor(public service:DataService )  { }

  ngOnInit(): void {
  }
  increase(){
    this.service.addOne();
  }

}
