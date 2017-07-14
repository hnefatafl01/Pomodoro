import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  run: boolean;
  determinate = 0;
  constructor() {
    this.run = false;
  }
  ngOnInit() {

  }

  startSpinner() {
    if (this.run === false) {
      this.determinate += 1;
      return this.determinate;
    }
  }
}
