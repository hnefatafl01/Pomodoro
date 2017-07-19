import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: string[];
  todo: string;
  constructor() { }

  ngOnInit() {
    this.tasks = ['hi', 'do things', 'eat food'];
  }

  addTask() {
    this.tasks.unshift(this.todo);
  }

  removeTask(index) {
    for (let i; i < this.tasks.length; i++) {
      if (this.tasks[i] === index) {
        this.tasks.splice(i, 1);
      }
    }
  }
}
