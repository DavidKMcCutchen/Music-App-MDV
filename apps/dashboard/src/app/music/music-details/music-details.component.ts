import { Component, EventEmitter , Input, Output } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Song } from "@music-app/api-interfaces";

@Component({
  selector: 'music-app-music-details',
  templateUrl: './music-details.component.html',
  styleUrls: ['./music-details.component.scss']
})
export class MusicDetailsComponent {
  currentSong: Song;
  originalTitle: string;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set song(value) {
    if (value) this.originalTitle = value.name;
    this.currentSong = { ...value }
  }
  @Input() form: FormGroup;

  save(formDirective: NgForm) {
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  }

  cancel() {
    this.cancelled.emit();
  }
}
