import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../../task';
import { ReadProvider } from '../read/read';
import { WriteProvider } from '../write/write';

@Injectable()

export class TasksProvider {

  constructor(public readProvider: ReadProvider, public writeProvider: WriteProvider) {}

  ngOnInit(){
    this.readProvider.getTasks();
  }

  Tasks: Task[] = this.readProvider.Tasks();
  heading: string;
  index: number;

  updateTask(index: number, task: Task){
    this.heading = this.Tasks[index].heading;
    this.Tasks[index] = task;
    this.writeProvider.updateTask(task, this.heading);
  }

  addTask(task: Task){
    this.Tasks.push(task);
    this.writeProvider.addTask(task);
  }

  updateToday(task: Task){
    this.index = this.Tasks.indexOf(task);
    this.Tasks[this.index].isToday = task.isToday;
    this.writeProvider.updateToday(task);
  }

}
