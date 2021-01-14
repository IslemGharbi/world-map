import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { PaysComponent } from './pays/pays.component';
import { RegionPaysComponent } from './region-pays/region-pays.component';
import { RegionComponent } from './region/region.component';

const routes: Routes = [
  { path:'',component:HomeComponent},
  { path:'home',component:HomeComponent},
  { path:'regions',component:RegionComponent},
  { path:'countries',component:PaysComponent},
  { path:'countries/:region',component:RegionPaysComponent},
  { path:'country/:pay',component:DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
