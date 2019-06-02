import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Task } from '../../task';
import { ReadProvider } from '../../providers/read/read';
import { TasksProvider } from '../../providers/tasks/tasks';
import { NewTaskProvider } from '../../providers/new-task/new-task';

@IonicPage()

@Component({
  selector: 'page-editor',
  templateUrl: 'editor.html'
})

export class EditorPage {

  categories: string[]

  subcategories = []

  index = this.newTaskProvider.num
  updatedTask : Task
  oldTask: Task
  category: string
  subcategory: string
  location: string
  isChecked: boolean
  isToday: boolean
  heading: string
  description: string
  status: string


  constructor(public navCtrl: NavController, public navParams: NavParams, public newTaskProvider: NewTaskProvider, public tasksProvider: TasksProvider, public readProvider: ReadProvider) { }

  ngOnInit(){
    this.readProvider.getCategories();
    this.categories = this.readProvider.Categories();
    this.index = this.newTaskProvider.num
    this.oldTask = this.tasksProvider.Tasks[this.index]
    this.readProvider.getSubCategories(this.oldTask.category);
    this.subcategories = this.readProvider.SubCategories();
    this.category = this.oldTask.category
    this.subcategory = this.oldTask.subcategory
    this.location = this.oldTask.location
    this.isChecked = this.oldTask.isChecked
    this.isToday = this.oldTask.isToday
    this.heading = this.oldTask.heading
    this.description = this.oldTask.description
    this.status = this.oldTask.status
    console.log(this.category)
  }

  categoryChosen(category) {
    this.subcategories = []
    this.readProvider.getSubCategories(category);
    this.subcategories = this.readProvider.SubCategories();
  }

  saveTask() {
    console.log(this.index)
    console.log(this.oldTask)
    this.updatedTask =  {
      category : this.category,
      subcategory : this.subcategory,
      location : this.location,
      isChecked : this.isChecked,
      heading : this.heading,
      description : this.description,
      status: this.status,
      isToday: this.isToday
    }

    this.tasksProvider.updateTask(this.index, this.updatedTask)

    console.log(this.updatedTask)
    console.log(this.tasksProvider.Tasks)

    /*this.category = ''
    this.subcategory = ''
    this.location = ''
    this.isChecked = false
    this.heading = ''
    this.description = ''
    this.status = ''
    this.isToday = false**/

    this.navCtrl.popToRoot();
  }

}
