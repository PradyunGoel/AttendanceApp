import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { firestore } from 'firebase';
import { Task } from '../../task';

@Injectable()

export class WriteProvider {

  constructor(private firestore: AngularFirestore) {};

  addTask(task: Task) {
    this.firestore.collection("Employee").doc("pradyungoel@gmail.com").collection("Tasks").doc(task.heading).set(task);
  }

  updateTask(task: Task, docId: string) {
    // this.firestore.collection("Employee").doc("pradyungoel@gmail.com").collection("Tasks").doc(docId).delete();
    this.firestore.collection("Employee").doc("pradyungoel@gmail.com").collection("Tasks").doc(task.heading).set(task, {merge : true});
  }
  
  updateToday(task: Task) {
    this.firestore.collection("Employee").doc("pradyungoel@gmail.com").collection("Tasks").doc(task.heading).update({isToday: task.isToday});
  }
}
