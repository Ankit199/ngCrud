import { Component, OnInit } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import{ActivatedRoute} from '@angular/router';
import{Router} from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id:number;
  data:Object={};
  jsonapi=[];
jsonapiobject:Object={};
 private headers=new Headers({'Content-Type':'application/json'});
 title="Update User Data";
   message:string;
   isAdded:boolean;


  constructor(private http:Http, private router:Router, private route:ActivatedRoute) 
  { 
     this.message="Record UpDate Successfully ! Thank You ..."
    this.isAdded=false;
  }
  

UpdateData(jsonapi)
{
  
if(confirm("are you sure want to UpdateComponent ? "+ this.id))
{
  this.jsonapiobject=
      {
        "name":jsonapi.name,
        "address":jsonapi.address,
        "email":jsonapi.email,
        "passward":jsonapi.passward
       };
        const url=`${"http://localhost:3000/jsonapi"}/${this.id}`;
        this.http.put(url,JSON.stringify(this.jsonapiobject),{headers:this.headers}).
        subscribe
        (
          (res:Response)=>{this.router.navigate(['userlist']);}
        )
}
}






  ngOnInit() {
    this.route.params.subscribe(params =>{ this.id= +params['id'];});

     this.http.get("http://localhost:3000/jsonapi").subscribe(
     (res:Response)=>{
       this.jsonapi=res.json();
       for(var i=0;i < this.jsonapi.length; i++ )
       {
        // here we match id with params id
        if(parseInt(this.jsonapi[i].id) === this.id)
        {
          this.data=this.jsonapi[i];
          break;
        }
       }
     }
   )
  }

}
