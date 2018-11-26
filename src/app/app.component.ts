import { Component } from '@angular/core';
import { delay } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parent 2 Child Communications using Input';
  parentMessage:string = "Counter value at parent is : ";
  parentCounter:number = 0;
  
  ngOnInit() {
    this.periodicCounter();
  }

  async periodicCounter(){
    while( this.parentCounter < 10){
      this.parentCounter++;
     await delay(1000);
    }
    this.parentMessage = "Final counter value at parent is : ";
  }
}
