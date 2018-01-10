
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PubComponent, FoodComponent,HomeComponent } from './components';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }