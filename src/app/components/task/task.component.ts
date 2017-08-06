import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task;
  constructor(private dataService: DataService) {}

  removeTask(task) {
    const id = task.id;
    this.dataService
      .deleteTask(id)
      .subscribe((response) => {
         console.log(response);
      })
    // for (let i = 0; i < this.tasks.length; i++) {
    //   if (this.tasks[i] === task) {
    //     this.tasks.splice(i, 1);
    //   }
    // }
  }
}
