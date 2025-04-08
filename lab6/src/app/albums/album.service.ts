import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlbumsList } from '../albums/albums-list';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) {}

  getAlbum(id: number): Observable<AlbumsList> {
    return this.http.get<AlbumsList>(`${this.baseUrl}/${id}`);
  }

  updateAlbum(album: AlbumsList): Observable<AlbumsList> {
    return this.http.put<AlbumsList>(`${this.baseUrl}/${album.id}`, album);
  }
}
