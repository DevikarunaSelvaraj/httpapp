import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }
  login()
  {
   return this.http.get<any[]>("./assets/data.json");
  }
  isLogin()
  
  {
    return !!localStorage.getItem("loggeduser");
  }

  weather(city:string)
  {
    return this.http.get<any[]>("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=3a3eb62e70b9745f96cb7c04245a9cb8");
  }
  news()
  {
    return this.http.get<any>("https://newsapi.org/v2/top-headlines?country=in&apiKey=408b4153b994422d8638da72f2d3ac5b");
  }
  selectNews(data:string)
  {
    return this.http.get<any>("https://newsapi.org/v2/top-headlines?country=in&category="+data+"&apiKey=408b4153b994422d8638da72f2d3ac5b");
  }
  movie(name:string)
  {
    return this.http.get<any>("http://www.omdbapi.com/?t="+name+"&apikey=c429066e");
  }
  joke()
  {
    return this.http.get<string>("http://api.icndb.com/jokes/random");
  }
  
}
