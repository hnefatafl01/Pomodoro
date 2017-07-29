import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  @Input() timeString;
  progress: number;

  constructor() {}

  ngOnChange() {
    // this.progress = formatTime
    // console.log(this.progress);
    // this.progress = this.formatTime(this.timeString, 60);
  }

  ngOnInit() {
    // this.progress = this.formatTime(this.timeString, 60);
  }

  formatTime(time, timerLength) {
    const min = Number(time.substring(0, 2))
    const sec = Number(time.substring(3, 5))
    const seconds = (min * 60) + sec;
    const remainingTime = (100 * (seconds / timerLength)).toFixed(1);
    console.log(remainingTime)
    return remainingTime;
  }


}
