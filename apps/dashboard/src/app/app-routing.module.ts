import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { MusicService } from '@music-app/core-data';
import { MusicComponent } from './music/music.component';
import { LoginComponent } from '@music-app/ui-login';

const routes: Route[] = [
  {path:'', component: LoginComponent},
  {path: 'songs', component: MusicComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo:'', pathMatch: 'full'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
