import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  todo: Todo;
  tasks: Todo[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getTasks().subscribe((todos) => {
      this.tasks = todos.slice(0, 5);
    });
  }

  addTask(todo) {
    console.log(todo)
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

interface Todo {
  userId: number,
  id: number,
  completed: boolean,
  title: string
}
