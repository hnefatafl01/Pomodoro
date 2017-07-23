import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  id: number;
  title: string;
  completed: boolean;
  // constructor(id: number, title: string, completed: boolean) {
    // this.id = id;
    // this.title = title;
    // this.completed = completed;
  // }
}
