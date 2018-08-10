import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';

import { UserloginService } from '../userlogin.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public users: CurrentUser;
  names: string;
  show: boolean ;


  constructor(public router: Router, public http: Http, private user: UserloginService) {
    user.getLoggedInName.subscribe(name => this.changeName(name.User , name.logged));
    }
  private changeName(name: string , shw: boolean ): void {
    this.names = name;
    this.show = shw;
}
  ngOnInit() {
  }
  logot() {
    debugger;
 if (this.user.logout()) {
  this.router.navigate(['login']);
 }
}
}
interface CurrentUser {
  users: string;
}
