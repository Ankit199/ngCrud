import { Component, OnInit } from '@angular/core';
import { UserloginService } from '../userlogin.service';
import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  title = 'Login Panel Area';
  message: string;
  isAdded: boolean;
  name = 'anony';
  login = [];

  constructor(public router: Router, public http: Http, private user: UserloginService) {
    this.message = 'invalid user...';
    this.isAdded = false;
  }

  LoginUser = function (e) {
    e.preventDefault();
    console.log(e);
    const name = e.target.elements[0].value;
    const passward = e.target.elements[0].value;

    if (name === 'ankit' && passward === 'ankit') {
      this.user.setuserlogin();
      this.router.navigate(['home']);
    }  else {

      this.isAdded = true;
    }
  };


  ngOnInit() {    }

}
