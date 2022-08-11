import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-types',
  templateUrl: './pipes-types.component.html',
  styleUrls: ['./pipes-types.component.css']
})
export class PipesTypesComponent implements OnInit {
text:string='hi megha';
mark: number=200;
rupees:number=500;
  constructor() { }

  ngOnInit(): void {
  }

}
