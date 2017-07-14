import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  private setTimeoutHandler: any;
  private setIntervalHandler: any;
  formattedTime: any;
  time = 0;
  title = 'Super Pom';

  constructor(private timerService: AppService) {
      // this.formattedTime = AppService.formatter(this.time);
  }

  ngOnInit() {
  }

  timer(ticker: any) {
    this.setTimeoutHandler = setTimeout(() => { }, 20000);
  }

  tick() {
    this.setIntervalHandler = setInterval(() => {
      this.time += 1;
      console.log(this.time);
    }, 1000);
  }

  start() {
    this.timer(this.tick());
    console.log('start this shiz');
  }

  stop() {
    clearTimeout(this.setTimeoutHandler);
    clearInterval(this.setIntervalHandler);
    console.log('stop this shiz');
  }
}
