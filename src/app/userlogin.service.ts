import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class UserloginService {
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter(); // Global Acces Variable Declare
  private isuserlogin;
  public name;
  constructor() {
    this.isuserlogin = false;
  }
  setuserlogin() {
    this.isuserlogin = true;
    this.name = 'ankit';
    localStorage.setItem('currentUser' , 'ankit');
    this.getLoggedInName.emit({'User': localStorage.getItem('currentUser') , 'logged': this.isuserlogin});
  }
  getusertlogin() {
    return this.isuserlogin;
  }
  logout() {
    debugger;
    this.isuserlogin = false;
    this.name = ' ';
    localStorage.removeItem('currentUser') ;
    localStorage.setItem('currentUser', '');
    this.getLoggedInName.emit({'User': localStorage.getItem('currentUser') , 'logged': this.isuserlogin});
    return true;
    }
}
