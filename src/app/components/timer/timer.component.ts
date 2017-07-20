import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})

export class TimerComponent implements OnInit {
  time = '00:00';
  timerStatus = 0;
  title = 'Super Pom';

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {}

  processOutsideOfAngularZone() {
    this.time = '00:00';
    this._ngZone.runOutsideAngular(() => {
        this.timer(.125, this.timerStatus);
    });
  }

  timer(minutesDuration: number, status: number) {
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
                // const time: string = minutes + ':' + seconds;
                this.time = minutes + ':' + seconds;
                count--;
                console.log(this.time);
                if (this.time === '00:15' || status !== 1) {
                    clearInterval(interval);
                    console.log('thisTimes up');
                }
            }, 1000);
        }
    }

  start() {
    this.timerStatus = 1;
    this.processOutsideOfAngularZone()
    console.log('start this shiz');
  }

  stop() {
    this.timerStatus = 0;
    console.log('stop this shiz');
  }
  // getStatus() {
  //   return this.timerStatus;
  // }
}
