import { Song } from "@music-app/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";

import * as SongsActions from './songs.actions';

export const SONGS_FEATURE_KEY = 'songs';

export interface SongsState extends EntityState<Song> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
}

export interface SongsPartialState {
  readonly [SONGS_FEATURE_KEY]: SongsState
}

export const songsAdapter: EntityAdapter<Song> = createEntityAdapter<Song>();

export const initialSongsState: SongsState = songsAdapter.getInitialState(
  {
    loaded: false,
  }
);

const onFailure = (state, { error }): SongsState => ({ ...state, error });

const onDispatch = (state, action): SongsState => ({
  ...state,
  loaded: false,
  error: null,
});

const _songsReducer = createReducer(
  initialSongsState,
  on(
    SongsActions.loadSongFailure,
    SongsActions.loadSongsFailure,
    SongsActions.deleteSongFailure,
    SongsActions.updateSongFailure,
    SongsActions.createSongFailure,
    onFailure
  ),
  on(
    SongsActions.loadSong,
    SongsActions.loadSongs,
    SongsActions.deleteSong,
    SongsActions.updateSong,
    SongsActions.createSong,
    onDispatch
  ),
  on(SongsActions.loadSongSuccess, (state, { song }) => 
  songsAdapter.upsertOne(song, { ...state, loaded: true })
  ),
  on(SongsActions.selectSong, (state, { songId }) => ({
    ...state,
    selectedId: songId,
  })),
  on(SongsActions.loadSongsSuccess, (state, {songs}) =>
  songsAdapter.setAll(songs, { ...state, loaded: true })
  ),
  on(SongsActions.deleteSongSuccess, (state, { song }) =>
  songsAdapter.removeOne(song.id, {...state, loaded: true })
  ),
  on(SongsActions.updateSongSuccess, (state, { song }) =>
  songsAdapter.updateOne(
    { id: song.id, changes: song },
    { ...state, loaded: true }
  )
),
on(SongsActions.createSongSuccess, (state, { song }) =>
songsAdapter.addOne(song, { ...state, loaded: true })
  )
);

export function songsReducer(
  state: SongsState | undefined,
  action: Action
) {
  return _songsReducer(state, action);
}