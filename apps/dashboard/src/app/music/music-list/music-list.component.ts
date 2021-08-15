import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Song } from "@music-app/api-interfaces";

@Component({
  selector: 'music-app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss']
})
export class MusicListComponent {
  @Input() songs: Song[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
