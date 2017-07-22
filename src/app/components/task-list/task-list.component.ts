import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgForm } from '@angular/forms';
import { TaskComponent } from '../task/task.component';

const TASKS: TaskComponent[] = [
      { title: 'eat', completed: false },
      { title: 'have fun', completed: true },
      { title: 'complete form', completed: false },
      { title: 'bind timer data', completed: false },
      { title: 'display timer data', completed: false }
];

@Component({
  selector: 'app-tasks',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {
  tasks = TASKS;
  isCompleted: boolean;
  // @Input() public task: TaskComponent;
  task: TaskComponent = {
    title: 'eat',
    completed: false
  }

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    // this.dataService.getTasks().subscribe((todos) => {
    //   this.tasks = todos.slice(0, 5);
    // });
    this.isCompleted = this.task.completed;
    console.log('init', this.tasks);
  }

  onSubmit(taskTitle: string) {
    this.isCompleted = false;
    this.task.title = taskTitle;
    this.tasks.unshift(this.task);
  }

  removeTask(task) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i] === task) {
        this.tasks.splice(i, 1);
      }
    }
  }
}
