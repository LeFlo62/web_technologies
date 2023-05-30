import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HousingComponent } from './components/housing/housing.component';
import { AdsComponent } from './components/ads/ads.component';
import { CreateHousingComponent } from './components/create-housing/create-housing.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'housing/:id', component: HousingComponent },
  { path: 'my-ads', component: AdsComponent },
  { path: 'create-housing', component: CreateHousingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
