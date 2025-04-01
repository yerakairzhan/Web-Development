import { Component, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AlbumCardComponent } from '../album-card/album-card.component';
import { AlbumsList } from './albums-list';
import { AlbumsService } from './albums.service';

@Component({
  selector: 'app-albums',
  imports: [RouterModule, AlbumCardComponent],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.scss',
})
export class AlbumsComponent {
  albums: AlbumsList[] = [];
  editedTitle = signal('');

  constructor(private albumsService: AlbumsService, private router: Router) {
    this.fetchAlbums();
  }

  fetchAlbums(): void {
    this.albumsService.getAlbums().subscribe({
      next: (data) => (this.albums = data),
      error: (err) => console.error('Error fetching albums:', err),
    });
  }

  updateTitle(event: Event) {
    const input = event.target as HTMLInputElement;
    this.editedTitle.set(input.value);
  }

  saveChanges(album: AlbumsList) {
    if (!album) return;

    const updatedAlbum: AlbumsList = {
      id: album.id,
      userId: album.userId,
      title: this.editedTitle(),
    };

    this.albumsService.updateAlbum(updatedAlbum).subscribe({
      next: (response) => {
        this.albums = this.albums.map((a) =>
          a.id === response.id ? { ...a, title: response.title } : a
        );
        console.log('Album updated:', response);
      },
      error: (err) => console.error('Error updating album:', err),
    });
  }
}
