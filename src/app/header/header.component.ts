import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public apiSer:ApiService,public myroute:Router) { }

  ngOnInit(): void {
  }
  logout()
  {
    localStorage.clear();
    this.myroute.navigateByUrl("/login");
  }

}
