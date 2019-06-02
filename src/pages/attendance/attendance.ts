import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { ContactPage } from '../contact/contact';
import { Task } from '../../task';
import { TasksProvider } from '../../providers/tasks/tasks';
import { AlertController } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { EditorPage } from '../editor/editor';
import { NewTaskProvider } from '../../providers/new-task/new-task';

@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html'
})

export class AttendancePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public newTaskProvider: NewTaskProvider, public formsModule: FormsModule, public tasksProvider: TasksProvider) {}

  /*Tasks: Task[] = [
    {category: "", subcategory: "", location: "", heading: "Attendance App", description: "Create an app to take attendance.", status: "Work in progress.", isChecked: false, isToday: false},
    {category: "", subcategory: "", location: "", heading: "Not Working", description: "Create an app which doesn't work.", status: "Discontinued.", isChecked: false, isToday: false}
  ]**/

  Tasks = this.tasksProvider.Tasks;

  num: number;

  go(){
    this.navCtrl.push(DetailsPage);
  }

  goCat(){
    this.navCtrl.push(ContactPage);
  }

  editMe(task: Task){
    this.newTaskProvider.num = this.Tasks.indexOf(task);
    console.log(this.newTaskProvider.num);
    this.navCtrl.push(EditorPage);
  }

  saveChanges(task){
    this.tasksProvider.updateToday(task);
  }

}
