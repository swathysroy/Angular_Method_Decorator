import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  counter=0;

  @HostListener('window:keydown',['$event'])
  handleKeyDown(event:KeyboardEvent){
    this.counter++;
  }

  resetCounter(){
    this.counter=0;
  }
}
