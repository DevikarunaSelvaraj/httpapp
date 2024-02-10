import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  details:any;
  isLoading=false;
  constructor(public apiSer:ApiService) { }

  ngOnInit(): void {
  }
  movieInfo(name:any)
  {
    this.isLoading=true;
    this.apiSer.movie(name.target.value).subscribe({next:(data:any)=>{
      console.log(data);
      this.details=data;
      this.isLoading=false;
    },error:(error:any)=>{
      console.log(error);
    }})
  }
}
