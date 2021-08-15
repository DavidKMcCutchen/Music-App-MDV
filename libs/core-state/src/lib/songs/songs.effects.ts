import { Injectable } from '@angular/core';
import { MusicService } from '@music-app/core-data';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as SongsActions from './songs.actions';
import { map } from 'rxjs/operators';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import { Song } from '@music-app/api-interfaces';

@Injectable()
export class SongsEffects {
  loadSongs$$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SongsActions.loadSong),
      fetch({
        run: (action) =>
          this.musicService
            .find(action.songId)
            .pipe(map((song: Song) => SongsActions.loadSongSuccess({ song }))),
        onError: (action, error) => SongsActions.loadSongFailure({ error }),
      })
    )
  );

  loadSongs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SongsActions.loadSongs),
      fetch({
        run: () =>
          this.musicService
            .all()
            .pipe(
              map((songs: Song[]) => SongsActions.loadSongsSuccess({ songs }))
            ),
        onError: (action, error) => SongsActions.loadSongsFailure({ error }),
      })
    )
  );

  updateSong$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SongsActions.updateSong),
      pessimisticUpdate({
        run: (action) =>
          this.musicService
            .update(action.song)
            .pipe(
              map((song: Song) => SongsActions.updateSongSuccess({ song }))
            ),
        onError: (action, error) => SongsActions.updateSongFailure({ error }),
      })
    )
  );

  deleteSong$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SongsActions.deleteSong),
      pessimisticUpdate({
        run: (action) =>
          this.musicService
            .delete(action.song)
            .pipe(
              map(() => SongsActions.deleteSongSuccess({ song: action.song }))
            ),
        onError: (action, error) => SongsActions.deleteSongFailure({ error }),
      })
    )
  );

  createSong$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SongsActions.createSong),
      pessimisticUpdate({
        run: (action) =>
          this.musicService
            .create(action.song)
            .pipe(
              map((song: Song) => SongsActions.createSongSuccess({ song }))
            ),
        onError: (action, error) => SongsActions.createSongFailure({ error }),
      })
    )
  );

  constructor(private actions$: Actions, private musicService: MusicService) {}
}
