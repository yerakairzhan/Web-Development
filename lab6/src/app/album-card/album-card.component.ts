import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AlbumsList } from '../albums/albums-list';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrl: './album-card.component.scss',
})
export class AlbumCardComponent {
  @Input() album!: AlbumsList;
  @Output() delete = new EventEmitter<number>();
  @Output() openDetail = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.album.id);
  }

  onOpenDetail() {
    this.openDetail.emit(this.album.id);
  }
}
