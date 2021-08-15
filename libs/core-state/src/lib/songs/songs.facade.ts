import { Injectable } from "@angular/core";
import { Song } from "@music-app/api-interfaces";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { dispatch } from "rxjs/internal/observable/pairs";
import { filter, timestamp } from "rxjs/operators";
import * as SongsActions from './songs.actions';
import * as fromSongs from './songs.reducer';
import * as SongsSelectors from './songs.selectors';

@Injectable({
  providedIn: 'root',
})
export class SongsFacace {
  allSongs$ = this.store.pipe(select(SongsSelectors.getAllSongs));
  selectedSong$ = this.store.pipe(select(SongsSelectors.getSelectedSong));
  loaded$ = this.store.pipe(select(SongsSelectors.getSongsLoaded));

  mutations$ = this.actions$.pipe(
    filter((action: Action) =>
    action.type === SongsActions.createSong({} as any) .type ||
    action.type === SongsActions.deleteSong({} as any) .type ||
    action.type === SongsActions.updateSong({} as any) .type
    )
  );

  selectSong(songId: string) {
    this.dispatch(SongsActions.selectSong({ songId }));
  }

  loadSongs() {
    this.dispatch(SongsActions.loadSongs());
  }

  loadSong(songId: string) {
    this.dispatch(SongsActions.loadSong({ songId }));
  }

  saveSong(song: Song) {
    song.id ? this.updateSong(song) : this.createSong(song);
  }

  createSong(song: Song) {
    this.dispatch(SongsActions.createSong({ song }));
  }

  updateSong(song: Song) {
    this.dispatch(SongsActions.updateSong({ song }));
  }

  deleteSong(song: Song) {
    this.dispatch(SongsActions.deleteSong({ song }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  constructor(
    private store: Store<fromSongs.SongsPartialState>,
    private actions$: ActionsSubject
  ) {}
}
