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
    delete this.todo;
  }

  removeTask(todo) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i] === todo) {
        this.tasks.splice(i, 1);
      }
    }
  }
}
