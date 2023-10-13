import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';
  message: string="message";
  counter: number=0;
  constructor() {
    console.log(this.message);
    setInterval(() =>{
      this.counter++;
    },1000);
    const counterInterval=setTimeout(() => {
     clearInterval(counterInterval);
    }, 20000);
  
}
}