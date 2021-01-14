import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NaveComponent } from './nave/nave.component';
import { RegionComponent } from './region/region.component';
import { PaysComponent } from './pays/pays.component';
import {​​ HttpClientModule }​​ from '@angular/common/http';
import { RegionPaysComponent } from './region-pays/region-pays.component';
import { DetailComponent } from './detail/detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NaveComponent,
    RegionComponent,
    PaysComponent,
    RegionPaysComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
