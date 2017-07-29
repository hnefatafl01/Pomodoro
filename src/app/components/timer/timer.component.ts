import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})

export class TimerComponent implements OnInit {
  time = '00:00';
  // timerStatus = 0;
  timer;
  @Output() timeEmitter = new EventEmitter<string>();

  constructor() {
    // console.log(this.timeEmitter);
  }

  ngOnInit() {
  }

  // onTimeChange(event) {
  //   this.time = event;
  // }

  start(minutesDuration: number) {
    let count = minutesDuration * 60;
    const start = new Date().getTime();
    this.timer = setInterval(() => {
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
        this.time = minutes + ':' + seconds;
        count--;
        console.log(this.time);
        this.timeEmitter.emit(this.time);

        // if (this.time === '00:15') {
        //     clearInterval(this.timer);
        //     console.log('thisTimes up');
        // }
    }, 1000);
  }

  stop() {
    clearInterval(this.timer);
    console.log('stop this shiz');
  }
}

