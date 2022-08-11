import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { DataService } from './service/data.service';
import { PipesTypesComponent } from './pipes-types/pipes-types.component';



@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    PipesTypesComponent,
 
  
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
    
 
   
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
