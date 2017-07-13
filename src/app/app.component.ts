import { Component } from '@angular/core';
// import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private setTimeoutHandler: any;
  private setIntervalHandler: any;
  title = 'Super Pom';
  time = 0;
  timer(ticker: any) {
    this.setTimeoutHandler = setTimeout(() => { }, 6000);
  }

  tick() {
    this.setIntervalHandler = setInterval(() => {
      this.time += 1;
      console.log(this.time);
    }, 1000);
  }

  start(){
    this.timer(this.tick());
    console.log("start this shiz");
  }
  stop() {
    clearTimeout(this.setTimeoutHandler);
    clearInterval(this.setIntervalHandler);
    console.log("stop this shiz");
  }
}
