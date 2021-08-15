import { Song } from "@music-app/api-interfaces";
import { createAction, props } from "@ngrx/store";

// Select Entity
export const selectSong = createAction(
  '[SONGS] Select Song',
  props<{ songId: string }>()
);

//Load All Entities
export const loadSongs = createAction('[SONGS] Load Songs');

export const loadSongsSuccess = createAction(
  '[SONGS] Load Songs Success',
  props<{ songs: Song[] }>()
);

export const loadSongsFailure = createAction(
  '[SONGS] Load Songs Failure',
  props<{ error: any }>()
);

//Load Single Entity
export const loadSong = createAction(
  '[SONGS] Load Song',
  props<{ songId: string }>()
);

export const loadSongSuccess = createAction(
  '[SONGS] Load Song Success',
  props<{ song: Song }>()
);

export const loadSongFailure = createAction(
  '[SONGS] Load Song Failure',
  props<{ error: any }>()
);

// Load Update Entity

export const updateSong = createAction(
  '[SONGS] Update Song',
  props<{ song: Song}>()
);

export const updateSongSuccess = createAction(
  '[SONGS] Update Song Success',
  props<{ song: Song }>()
);
export const updateSongFailure = createAction(
  '[SONGS] Update Song Failure',
  props<{ error: any }>()
);

// Load Delete Entity
export const deleteSong = createAction(
  '[SONGS] Delete Song',
  props<{ song: Song}>()
);
export const deleteSongSuccess = createAction(
  '[SONGS] Delete Song Success',
  props<{ song: Song }>()
);
export const deleteSongFailure = createAction(
  '[SONGS] Delete Song Failure',
  props<{ error: any }>()
);

// Load Create Entity
export const createSong = createAction(
  '[SONGS] Create Song',
  props<{ song: Song }>()
);

export const createSongSuccess = createAction(
  '[SONGS] Create Song Success',
  props<{ song: Song }>()
);

export const createSongFailure = createAction(
  '[SONGS] Create Song Failure',
  props<{ error: any }>()
);
