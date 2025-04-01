import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlbumsList } from './albums-list';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  private readonly API_URL = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<AlbumsList[]> {
    return this.http.get<AlbumsList[]>(this.API_URL);
  }

  updateAlbum(album: AlbumsList): Observable<AlbumsList> {
    return this.http.put<AlbumsList>(`${this.API_URL}/${album.id}`, album);
  }
}
