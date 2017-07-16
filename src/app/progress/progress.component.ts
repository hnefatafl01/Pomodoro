import { Component, OnInit } from '@angular/core';
// import { TimerComponent } from '../timer/timer.component';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  // private determinant: any;
  // @Input('value') value: ;
  run: boolean;
  constructor() {
    this.run = false;
    // this.determinant = TimerComponent.getTime();
  }
  ngOnInit() {

  }

  startSpinner() {
    if (this.run === false) {
      // this.determinate += 1;
      // return this.determinate;
    }
  }
}
