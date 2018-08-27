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

  constructor( private http:Http, private tt:ToastrService) { 

  
    this.isAdded=false;
  }
  // define property in ts
debugger;
   userregisterobject:Object={
     
   };

   AddUser=function(user)
   {
     // Create object
      this.userregisterobject={ 
        "name":user.name,
        "address":user.address,
        "email":user.email,
        "passward":user.passward

    }
      // call object
      this.http.post("http://localhost:3000/jsonapi/" , this.userregisterobject).subscribe(
        (res:Response)=>{
          this.isAdded=true;  
          this.message="Record Added Successfully ! Thank You ...";
          this.tt.success( this.message, 'Toastr fun!');
        }
      )
   }
  ngOnInit() { }


}
