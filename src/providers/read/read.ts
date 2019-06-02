import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { firestore } from 'firebase';
import { Task } from '../../task';
import { TasksProvider } from '../tasks/tasks';

@Injectable()

export class ReadProvider {

  constructor(private firestore: AngularFirestore) {}

  readCategories: string[];

  readSubCategories: string[];

  readTasks: Task[];

  subCategories: boolean;

  docu: string;

  category: string;

  async getCategories() {
    this.readCategories = [];
    firestore().collection("Categories").get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.id);
          this.readCategories.push(doc.id);
        });
      })
  }

  Categories() {
    console.log(this.readCategories);
    return this.readCategories;
  }

  async getSubCategories(category) {
    this.readSubCategories = [];
    /*firestore().collection("Categories").doc(docName).get()
      .then(doc => {
        this.subCategories = doc.data().SubCategory;
      })
    if (this.subCategories == true) {
      firestore().collection("Categories").doc(docName).collection("SubCategories").get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.id);
          this.readSubCategories.push(doc.id);
        })
      })
    }
    else {
      this.readSubCategories = ['None'];
    }**/
    console.log(category);
    var dir = ("Categories/" + category);
    firestore().collection("Categories").doc(category).get()
    //firestore().doc(dir).get()
    .then(doc => {
      this.subCategories = doc.data().SubCategory;
      console.log(this.subCategories)
      if (this.subCategories === true) {
        firestore().collection('Categories/' + category + "/SubCategories").get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              console.log(doc.id);
              this.readSubCategories.push(doc.id);
            });
        })
      }
      else {
        this.readSubCategories = []
      }
    })
    .catch(err => {
      console.log('Error getting documents');
    }) 
  }
SubCategories() {
    console.log(this.readSubCategories);
    return this.readSubCategories;
  }

  async getTasks(){
    /*firestore().collection("Employees").doc("pradyungoel@gmail.com").collection("Tasks").get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.readTasks.push({
            category: doc.get("category"),
            subcategory: doc.get("subcategory"),
            location: doc.get("location"),
            heading: doc.get("heading"),
            description: doc.get("description"), 
            status: doc.get("status"), 
            isChecked: doc.get('isChecked'), 
            isToday: doc.get("isToday")
          });
          console.log(doc.get('category'));
        })
      })**/
  }

  Tasks() {
    this.readTasks = [];
    firestore().collection("Employee").doc("pradyungoel@gmail.com").collection("Tasks").get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.readTasks.push({
            category: doc.get("category"),
            subcategory: doc.get("subcategory"),
            location: doc.get("location"),
            heading: doc.get("heading"),
            description: doc.get("description"),
            status: doc.get("status"),
            isChecked: doc.get('isChecked'),
            isToday: doc.get("isToday")
          });
          console.log(doc.id, '=>', doc.data());
        })
      })
    console.log(this.readTasks);
    return this.readTasks;
  }

}
