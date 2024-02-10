import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  listNews:any[]=[];
  isLoading=true;
  
  constructor(public apiSer:ApiService) { }

  ngOnInit(): void {
    this.apiSer.news().subscribe({next:(data:any)=>{
      //console.log(data);
      this.listNews=data.articles;
      //this.listNews=Array.of(this.listNews);
      //console.log(this.listNews);
      this.isLoading=false;
    },error:(error:any)=>{
      console.log(error);
    }});
  }

  selectNews(news:any)
  {
    this.isLoading=true;
    console.log(news.target.value);
    var option=news.target.value;
    if(option!="all")
    {
      this.apiSer.selectNews(news.target.value).subscribe({next:(data:any)=>{
        console.log(data);
        this.listNews=data.articles;
        this.isLoading=false;
  
      },error:(error:any)=>{
        console.log(error);
      }});
    
    }
    else 
    {
      this.apiSer.news().subscribe({next:(data:any)=>{
        //console.log(data);
        this.listNews=data.articles;
        this.isLoading=false;
        //this.listNews=Array.of(this.listNews);
        //console.log(this.listNews);
      },error:(error:any)=>{
        console.log(error);
      }});
    }
      
    

    
    
    
  }
}
