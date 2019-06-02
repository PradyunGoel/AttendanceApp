import { Component, Injectable, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { firestore } from 'firebase';
import { ReadProvider } from '../../providers/read/read';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})

export class ContactPage implements OnInit{

  extra : string
  categoryvar : string
  subcategoryvar : string
  TorF: boolean
  docu: string
  enabled:boolean = false
  whileTorF: boolean
  edd: string[]
  bool: boolean
  path: string
  varlist: string[]
  moresubcats: [string[]]
  varId : any

  categories: string[];

  subcategories: string[];

  constructor(private firestore : AngularFirestore, public readProvider: ReadProvider) {}

  ngOnInit() {
    this.readProvider.getCategories();
    this.categories = this.readProvider.Categories();
    /*firestore().collection("Categories").get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.id);
          this.categories.push(doc.id)
          console.log(this.categories)
        });
      })**/
  }

  catClicked() {
    if (this.categoryvar !== undefined) {
      this.subcategories = []
      var dir = ("Categories/" + this.categoryvar)
      firestore().doc(dir).get()
      .then(doc => {
        this.docu = doc.id
        this.TorF = doc.data().SubCategory
        console.log(this.TorF)
        if (this.TorF === true) {
          
          firestore().collection('Categories/' + this.docu + "/SubCategories").get()
            .then(snapshot => {
              snapshot.forEach(doc => {
                console.log(doc.id);
                this.subcategories.push(doc.id);
              });
            })
    
          } else {
            this.subcategories = []
        }
      })      
    }
  }

  /*subcatChanged() {
    this.varlist = []
    this.moresubcats = [null]
    let x = 'Categories/' + this.categoryvar + "/SubCategories/" + this.subcategoryvar
    console.log(x)
    firestore().doc(x).get()
      .then(doc => {
        this.whileTorF = doc.data().SubCategory
        if (this.whileTorF === true) {
          this.varlist = []
          this.path = 'Categories/' + this.categoryvar + "/SubCategories/" + this.subcategoryvar + "/SubCategories"
          console.log(this.path)
          firestore().collection(this.path).get()
          .then(snapshot => {
            snapshot.forEach(doc => { 
                this.varlist.push(doc.id);
                this.moresubcats.splice(0, 1, this.varlist)
                console.log(this.varlist)
                console.log(this.moresubcats)
                this.varId = 0  
            });
          })
        }else if (this.whileTorF === false){
            this.moresubcats = [this.varlist]
            console.log(this.moresubcats)
            this.varlist.push(doc.id);
            this.moresubcats.splice(0, 1, this.varlist)
            console.log(this.moresubcats)
        }
      })
  }

  curpath:any
  prevarId = 0
  
  extraclicks() {
    this.curpath =  document.getElementById(this.varId)
    console.log("number & path are",this.varId,this.curpath.value)
    //console.log(document.getElementById(this.curpath))
    this.path = this.path + '/' + this.curpath.value
    console.log(this.path)
    firestore().doc(this.path).get()
      .then(doc => {
        this.docu = doc.id
        this.whileTorF = doc.data().SubCategory
        if (this.whileTorF === true) {
          var var_list = []
          this.path = this.path + "/SubCategories"
          firestore().collection(this.path).get()
          .then(snapshot => {
              snapshot.forEach(doc => {

                  var_list.push(doc.id);
                
            });
              this.prevarId = this.varId
              this.varId = this.varId + 1
              this.moresubcats.push(var_list)
              console.log(var_list)
              this.path = this.path
              console.log(this.varId)
              this.disabled = false
          })
        } else {
          var purepath = this.path
          console.log(this.varId)
          this.moresubcats.splice(this.varId+1, 1, ['none'])
          this.moresubcats.pop()
          console.log("NO MORE SUBCATEGORIES")
          this.path = purepath
          console.log(purepath)
          this.disabled = true
        }
      })      
  }
  disabled= false
  undo() {
    let lengthoflist = this.moresubcats.length
    this.disabled = false
    while(lengthoflist > this.varId){
      this.moresubcats.pop()
      lengthoflist = this.moresubcats.length
    }
    this.varId = this.varId - 1
    this.path = 'Categories/' + this.categoryvar + "/SubCategories/" + this.subcategoryvar + "/SubCategories"
  }**/
}
