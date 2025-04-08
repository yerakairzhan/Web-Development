import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumsList } from '../albums/albums-list';
import { AlbumsService } from '../albums/album.service';

@Component({
  selector: 'app-album-detail',
  imports: [RouterModule, CommonModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css',
})
export class AlbumDetailComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private albumsService = inject(AlbumsService);

  album: WritableSignal<AlbumsList | null> = signal(null);
  editedTitle = signal('');

  constructor() {
    const albumId = Number(this.route.snapshot.params['id']);
    this.fetchAlbum(albumId);
  }

  fetchAlbum(id: number) {
    const savedAlbum = localStorage.getItem(`album_${id}`);

    if (savedAlbum) {
      console.log('Loading from localStorage');
      const album = JSON.parse(savedAlbum) as AlbumsList;
      this.album.set(album);
      this.editedTitle.set(album.title);
    } else {
      console.log('Fetching from API');
      this.albumsService.getAlbum(id).subscribe((album) => {
        this.album.set(album);
        this.editedTitle.set(album.title);
      });
    }
  }

  saveChanges() {
    console.log("I'm working!!!");
    if (!this.album()) return;

    const updatedAlbum: AlbumsList = {
      id: this.album()!.id,
      userId: this.album()!.userId,
      title: this.editedTitle(),
    };

    this.albumsService.updateAlbum(updatedAlbum).subscribe({
      next: (response) => {
        console.log('Album updated:', response);

        // Update localStorage
        const savedAlbums = localStorage.getItem('albums');
        if (savedAlbums) {
          let albums = JSON.parse(savedAlbums) as AlbumsList[];
          albums = albums.map(album =>
            album.id === updatedAlbum.id ? updatedAlbum : album
          );
          localStorage.setItem('albums', JSON.stringify(albums));
        }

        this.album.set(updatedAlbum);
      },
      error: (err) => console.error('Error updating album:', err),
    });
  }

  onTitleChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.editedTitle.set(input.value);
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}
