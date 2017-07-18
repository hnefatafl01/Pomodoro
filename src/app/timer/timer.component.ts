import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  formattedTime: any;
  time = .25;
  timerStatus = 0;
  title = 'Super Pom';

  constructor(private timerService: AppService) {
  }

  ngOnInit() {
  }
  timer(minutesDuration, status) {
        if (status === 1) {
            let count = minutesDuration * 60;
            const start = new Date().getTime();
            const interval = setInterval(function() {
                const end = new Date().getTime();
                const elapsed = end - start;
                let seconds = Math.round((elapsed / 1000) % 60).toString();
                let minutes = Math.round((elapsed / (1000 * 60)) % 60).toString();
                if (seconds.length < 2) {
                seconds = '0' + seconds.toString();
                }
                if (minutes.length < 2) {
                minutes = '0' + minutes;
                }
                const time: string = minutes + ':' + seconds;
                count--;
                console.log(time)
                if (count === 0 || status === 0) {

                    clearInterval(interval);
                    console.log('Times up');
                    return time;
                }
            }, 1000);
        }
    }


  getTime() {
    this.formattedTime = this.timer(this.time, this.timerStatus);
    return this.formattedTime;
  }

  start() {
    this.timerStatus = 1;
    console.log('start this shiz');
  }

  stop() {
    this.timerStatus = 0;
    console.log('stop this shiz');
  }
  getStatus() {
    return this.timerStatus;
  }
}


