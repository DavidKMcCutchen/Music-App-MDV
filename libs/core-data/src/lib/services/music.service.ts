import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Song } from "@music-app/api-interfaces";

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  model = 'songs';

  constructor(private httpClient: HttpClient) { }

  all() {
    return this.httpClient.get<Song[]>(this.getUrl());
  }

  find(songId: string) {
    return this.httpClient.get<Song>(this.getUrlById(songId));
  }

  create(songs: Song) {
    return this.httpClient.post<Song>(this.getUrl(), songs)
  }

  update(songs) {
    return this.httpClient.patch<Song>(this.getUrlById(songs.id), songs)
  }

  delete({ id }: Song) {
    return this.httpClient.delete<Song>(this.getUrlById(id));
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`
  }
}
