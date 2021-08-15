import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './app-routing.module';
import { MusicComponent } from './music/music.component';
import { MusicListComponent } from './music/music-list/music-list.component';
import { MusicDetailsComponent } from './music/music-details/music-details.component';
import { CoreDataModule } from "@music-app/core-data";
import { CoreStateModule } from "@music-app/core-state";
import { MaterialModule } from "@music-app/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent, MusicComponent, MusicListComponent, MusicDetailsComponent],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    BrowserAnimationsModule, 
    RoutingModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
