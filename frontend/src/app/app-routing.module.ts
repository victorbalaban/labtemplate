
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PubComponent, FoodComponent,HomeComponent,CinemaComponent,ConcertComponent} from './components';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'pub', component: PubComponent
  },
  {
    path: 'food', component: FoodComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'cinema', component: CinemaComponent
  },
  {
    path: 'concert', component: ConcertComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }