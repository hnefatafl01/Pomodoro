import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgForm } from '@angular/forms';
import { TaskComponent } from '../task/task.component';
import {  } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit, OnChanges {
  tasks: any;
  isCompleted: boolean;
  task: TaskComponent;
  title: string;

  constructor(private dataService: DataService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('changes', changes);
  }

  ngOnInit() {
    this.task = new TaskComponent();
    this.task.id = undefined;
    this.task.completed = false;
    this.isCompleted = false;
    this.dataService
      .getTasks()
      .subscribe((data) => {
        // console.log('task list component', data)
        this.tasks = data;
    });

    // this.isCompleted = this.task.completed;
    // console.log('init', this.tasks);
  }

  onSubmit(event) {
    event.preventDefault();
    this.task.title = this.title;
    console.log(this.task)
    this.dataService
      .createTask(this.task)
      .subscribe((response) => {
        console.log('onSubmit', response);
      });
  }

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
