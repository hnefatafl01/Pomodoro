import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgForm } from '@angular/forms';
import { TaskComponent } from '../task/task.component';
import { Task } from './task.model';
import {  } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {
  tasks;
  task: Task;
  title: string;
  isCompleted: boolean;
  addTask = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.isCompleted = false;
    this.dataService
      .getTasks()
      .subscribe((data) => {
        // console.log('task list component', data)
        this.tasks = data;
    });
  }

  onInput() {
    this.addTask = true;
  }

  onSubmit(event) {
    event.preventDefault();
    const newTask = new Task();
    newTask.title = this.title;
    this.dataService
      .createTask(newTask)
      .subscribe((response) => {
        console.log('onSubmit', response);
      });
    this.title = '';
  }
}
