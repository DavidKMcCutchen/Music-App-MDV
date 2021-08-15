import { Component } from '@angular/core';


@Component({
  selector: 'music-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'Songs';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'songs', icon: 'view_list', title: 'Songs'}
  ]
}
