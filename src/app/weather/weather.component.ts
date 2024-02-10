import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city:string="";
  details:any;
  isLoading=false;
  constructor(public apiSer:ApiService) { }

  ngOnInit(): void {
  }
doSearch()
{
  this.isLoading=true;
  this.apiSer.weather(this.city).subscribe({next:(data:any[])=>{
    console.log(data);
    this.details=data;
    this.isLoading=false;
  },error:(error:any)=>{
    console.log(error);
  }})
}
}
