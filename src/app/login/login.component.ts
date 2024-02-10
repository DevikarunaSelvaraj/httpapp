import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string="";
  password:any;
  msg:string="";

  constructor(public apiSer:ApiService, public myroute:Router) { }

  ngOnInit(): void {
  }

  doLogin(form:NgForm)
  {
    console.log(form.value);
    
    console.log(this.username);
    this.apiSer.login().subscribe({next:(data:any[])=>{
      //console.log(data[0].username);
      for(let i=0;i<=data.length;i++)
      {
        console.log(data[i].username);
        console.log(this.username);
        if((this.username==data[i].username)&&(this.password==data[i].password))
        {
          localStorage.setItem("loggeduser",this.username);
          this.myroute.navigateByUrl("/weather");
        }
        else{
          this.msg="Invalid login";
        }
      }
    },error:(error:any)=>{
      console.log(error);
    }

    });
  }
}
