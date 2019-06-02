import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Task } from '../../task';
import { ReadProvider } from '../../providers/read/read';
import { TasksProvider } from '../../providers/tasks/tasks';

@IonicPage()

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})

export class DetailsPage {

  categories: string[]

  subcategories = []

  category = ''
  subcategory = ''
  location = ''
  isChecked = false
  isToday = false
  heading = ''
  description = ''
  status = 'Planned'
  NewTask: Task
  dummyTask: Task

  constructor(public navCtrl: NavController, public navParams: NavParams, public readProvider: ReadProvider, public tasksProvider: TasksProvider) { }

  ngOnInit() {
    this.readProvider.getCategories();
    this.categories = this.readProvider.Categories();
    this.readProvider.Tasks();
  }

  categoryChosen(category) {
    this.subcategories = []
    console.log(category)
    this.readProvider.getSubCategories(category);
    this.subcategories = this.readProvider.SubCategories();
  }

  createTask() {
    this.NewTask =  {
      category : this.category,
      subcategory : this.subcategory,
      location : this.location,
      isChecked : this.isChecked,
      heading : this.heading,
      description : this.description,
      status: this.status,
      isToday: this.isToday
    }

    this.tasksProvider.addTask(this.NewTask)

    console.log(this.NewTask)

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
