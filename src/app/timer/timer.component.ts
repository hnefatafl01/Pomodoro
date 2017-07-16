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
  time = .25;
  timerStatus = 0;
  title = 'Super Pom';

  constructor(private timerService: AppService) {
  }

  ngOnInit() {
  }

  // timer(ticker: any) {
  //   this.setTimeoutHandler = setTimeout(() => { }, 20000);
  // }

  // tick() {
  //   this.setIntervalHandler = setInterval(() => {
  //     this.time += 1;
  //     console.log(this.time);
  //   }, 1000);
  // }

  getTime() {
    // this.formattedTime = this.timerService.formatter(this.time);
    // return this.formattedTime;
    this.formattedTime = this.timerService.timer(this.time, this.timerStatus);
    return this.formattedTime;
  }

  start() {
    // this.timer(this.tick());
    this.timerStatus = 1;
    console.log('start this shiz');
  }

  stop() {
    // clearTimeout(this.setTimeoutHandler);
    // clearInterval(this.setIntervalHandler);
    this.timerStatus = 0;
    console.log('stop this shiz');
  }
  getStatus() {
    return this.timerStatus;
  }
}


