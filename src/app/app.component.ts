import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor() { }
 numero:number = 3;
 
 sumar(){
   this.numero +=1;

 }
 restar(){
   this.numero -=1;
  
 }
  ngOnInit(): void {
  }

}