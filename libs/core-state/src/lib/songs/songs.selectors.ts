import { emptySong } from "@music-app/api-interfaces";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { songsAdapter, SongsState, SONGS_FEATURE_KEY } from "./songs.reducer";

export const getSongsState = createFeatureSelector<SongsState>(SONGS_FEATURE_KEY);

const { selectAll, selectEntities } = songsAdapter.getSelectors();

export const getSongsLoaded = createSelector(
  getSongsState,
  (state: SongsState) => state.loaded
)

export const getSongsError = createSelector(
  getSongsState,
  (state: SongsState) => state.error 
)
export const getAllSongs = createSelector(
  getSongsState,
  (state: SongsState) => selectAll(state)
)
export const getSongsEntities = createSelector(
  getSongsState,
  (state: SongsState) => selectEntities(state)
)
export const getSelectedSongsId = createSelector(
  getSongsState,
  (state: SongsState) => state.selectedId
)
export const getSelectedSong = createSelector(
  getSongsEntities,
  getSelectedSongsId,
  (entities, selectedId) => entities[selectedId] || emptySong
)



