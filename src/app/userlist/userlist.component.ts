import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
    name: string;
  jsonapi = [];
  arr = [];

  constructor(private http: Http, private router: Router, private route: ActivatedRoute) { }

  SearchAllUser = function () {
    this.http.get('http://localhost:3000/jsonapi').subscribe(
      (res: Response) => {
        this.jsonapi = res.json();
      }
    );

  };



  deletedata = function (id) {
    if (confirm('are you sure want to Delete ? ' + id)) {
      const url = `${'http://localhost:3000/jsonapi'}/${id}`;
      return this.http.delete(url).subscribe
        (
        (res: Response) => {
          this.SearchAllUser();
        }
        );
    }
  };



  SearchByName = function (name) {
    const url = `${'http://localhost:3000/jsonapi'}/${name}`;
    return this.http.get(url).subscribe(
      (res: Response) => { this.jsonapi = res.json(); });
  };

  ngOnInit() {

    this.SearchAllUser();
  }

}
