import { AngularFireDatabase } from 'angularfire2/database'; 
import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{Http,Response,Headers} from '@angular/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
  
})
export class RegistrationComponent implements OnInit {
  title="User Registration Form";
   message:string;
   isAdded:boolean;
count :Number;
  constructor( private http:Http, private tt:ToastrService,private db : AngularFireDatabase) { 

  
    this.isAdded=false;
  }
  // define property in ts

   userregisterobject:Object={
     
   };
debugger;
   AddUser=function(user)
   {
     // Create object
      this.userregisterobject={ 
        "id":this.count+1,
        "name":user.name,
        "address":user.address,
        "email":user.email,
        "passward":user.passward

    }
     this.db.list('/JsonApi').push(this.userregisterobject);//.subscribe(res=>{
    //  this.isAdded=true;  
    //       this.message="Record Added Successfully ! Thank You ...";
    //       this.tt.success( this.message, 'Toastr fun!');

    // });
      // call object
      // this.http.post("http://localhost:3000/jsonapi/" , this.userregisterobject).subscribe(
      //   (res:Response)=>{
      //     this.isAdded=true;  
      //     this.message="Record Added Successfully ! Thank You ...";
      //     this.tt.success( this.message, 'Toastr fun!');
      //   }
      // )
   }
  ngOnInit() {
    this.db.list('/JsonApi').valueChanges().subscribe(
      (snapshot) => {
        this.count= snapshot.length;
        console.log(this.count)}
    );
   }
}
