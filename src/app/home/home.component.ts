import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';

import { UserloginService } from '../userlogin.service';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  name = 'anony';
  title = 'You LogIn Sucessfully!!!!!!';
public users: CurrentUser;
  constructor(public router: Router, public http: Http, private user: UserloginService) {
    //const users = this.user.users();
  }


  ngOnInit() {
    this.name = this.user.name;
    console.log('is user log in ', this.user.getusertlogin());
  }
  // ngOnDestroy() {
  //   localStorage.removeItem('currentUser');
  // }

}
interface CurrentUser {
  users: string;
}
