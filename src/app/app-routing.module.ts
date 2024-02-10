import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { JokeComponent } from './joke/joke.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { NewsComponent } from './news/news.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"weather",component:WeatherComponent,canActivate:[AuthGuard]},
  {path:"news",component:NewsComponent,canActivate:[AuthGuard]},
  {path:"movie",component:MovieComponent,canActivate:[AuthGuard]},
  {path:"joke",component:JokeComponent,canActivate:[AuthGuard]},
  {path:"**",component:NotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
