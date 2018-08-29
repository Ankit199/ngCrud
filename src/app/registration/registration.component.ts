import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']

})
export class RegistrationComponent implements OnInit {
  title = "User Registration Form";
  message: string;
  isAdded: boolean;
  count :any[];
  constructor(private http: Http, private tt: ToastrService, private db: AngularFireDatabase) {


    this.isAdded = false;
  }
  @ViewChild('userregisterobject') mytemplateForm : NgForm;
  // define property in ts

  userregisterobject: Object = {

  };
  debugger;
  AddUser = function (user) {
    // Create object
    this.userregisterobject = {
      "id": this.count.id + 1,
      "name": user.name,
      "address": user.address,
      "email": user.email,
      "passward": user.passward
    } 
    var key = this.db.list('/JsonApi').push(this.userregisterobject).getKey();
    if (key != "") {   
    this.mytemplateForm.reset();   
      this.message="Record Added Successfully ! Thank You ...";
      this.tt.success(this.message, 'Toastr fun!');     
    }
  }
  ngOnInit() {
    this.db.list('/JsonApi').valueChanges().subscribe(
      (snapshot:any[]) => {
        this.count = snapshot.reduce(function(prev, current) {
          if (+current.id > +prev.id) {
              return current;
          } else {
              return prev;
          }
      });
       
      }
    );
  }
}
