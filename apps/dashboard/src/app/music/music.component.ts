import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { emptySong, Song } from '@music-app/api-interfaces';
import { SongsFacace } from '@music-app/core-state';
import { Observable } from 'rxjs';


@Component({
  selector: 'music-app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})

export class MusicComponent implements OnInit {
  allSongs$: Observable<Song[]> = this.songFacade.allSongs$;
  selectedSong$: Observable<Song> = this.songFacade.selectedSong$;

  form: FormGroup;

  constructor(
    private songFacade: SongsFacace,
    private formBuilder: FormBuilder
  ) {
    this.songFacade.mutations$.subscribe((_) => this.resetSong());
   }

  ngOnInit() {
    this.initForm();
    this.songFacade.loadSongs();
    this.resetSong()
  }

  selectSong(song: Song) {
    this.form.patchValue(song);
    this.songFacade.selectSong(song.id)
  }
  saveSong(song: Song) {
    this.songFacade.saveSong(song);
  }

  deleteSong(song: Song) {
    this.songFacade.deleteSong(song);
  }

  resetSong()  {
    this.form.reset();
    this.selectSong(emptySong)
  }

  cancel() {
    this.resetSong();
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      name: [''],
      band: ['']
    })
  }
}
