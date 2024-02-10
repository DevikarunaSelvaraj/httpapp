import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  detail:any;
  constructor(public apiSer:ApiService) { }

  ngOnInit(): void {
    this.apiSer.joke().subscribe({next:(data:string)=>{
      console.log(data);
      this.detail=data;
    },error:(error:any)=>{
      console.log(error);
    }});
  }
  joke(){
    this.apiSer.joke().subscribe({next:(data:string)=>{
      console.log(data);
      this.detail=data;
    },error:(error:any)=>{
      console.log(error);
    }});
  }

}
