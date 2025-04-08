import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AlbumCardComponent } from '../album-card/album-card.component';
import { AlbumsList } from './albums-list';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-albums',
  imports: [RouterModule, AlbumCardComponent],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css',
})
export class AlbumsComponent {
  albums: AlbumsList[] = [];

  constructor(private http: HttpClient, private router: Router) {
    this.fetchAlbums();
  }

  fetchAlbums(): void {
    const savedAlbums = localStorage.getItem('albums');

    if (savedAlbums) {
      console.log('Loading albums from localStorage');
      this.albums = JSON.parse(savedAlbums);
    } else {
      console.log('Fetching albums from API');
      this.http
        .get<AlbumsList[]>('https://jsonplaceholder.typicode.com/albums')
        .subscribe((data) => {
          this.albums = data;
          localStorage.setItem('albums', JSON.stringify(data)); // Save in localStorage
        });
    }
  }


  deleteAlbum(id: number): void {
    this.albums = this.albums.filter((album) => album.id !== id);
  }

  openAlbumDetail(id: number): void {
    this.router.navigate(['/albums', id]);
  }
}
