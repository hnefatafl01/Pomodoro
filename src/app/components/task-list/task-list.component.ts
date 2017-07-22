import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgForm } from '@angular/forms';
import { TaskComponent } from '../task/task.component';

// const TASKS: TaskComponent[] = [
//       { title: 'eat', completed: false },
//       { title: 'have fun', completed: true },
//       { title: 'complete form', completed: false },
//       { title: 'bind timer data', completed: false },
//       { title: 'display timer data', completed: false }
// ];

@Component({
  selector: 'app-tasks',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {
  tasks: any;
  isCompleted: boolean;
  // @Input() public task: TaskComponent;
  task: TaskComponent = {
    id: 5,
    title: 'eat',
    completed: false
  }

  constructor(private dataService: DataService) {
    // this.tasks = dataService;
  }

  ngOnInit() {
    this.dataService.getTasks().subscribe((response) => {
      this.tasks = response;
    });
    this.isCompleted = this.task.completed;
    console.log('init', this.tasks);
  }

  onSubmit(taskTitle: string) {
    this.isCompleted = false;
    this.task.title = taskTitle;
    this.tasks.unshift(this.task);
  }

  removeTask(task) {
    const id = task.id;
    this.dataService.deleteTask(id)
    // for (let i = 0; i < this.tasks.length; i++) {
    //   if (this.tasks[i] === task) {
    //     this.tasks.splice(i, 1);
    //   }
    // }
  }
}
