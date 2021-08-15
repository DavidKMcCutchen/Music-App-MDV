import { ActionReducerMap } from "@ngrx/store";

import * as fromSongs from './songs/songs.reducer';

export interface AppState {
  [fromSongs.SONGS_FEATURE_KEY]: fromSongs.SongsState
}

export const reducers: ActionReducerMap<AppState> = {
  [fromSongs.SONGS_FEATURE_KEY]: fromSongs.songsReducer
};