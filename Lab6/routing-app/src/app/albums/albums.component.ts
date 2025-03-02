import { Component, OnInit } from '@angular/core';
import { Album } from "../models";
import { AlbumsService } from "../albums.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums?: Album[];
  loaded?: boolean;
  newAlbum: string;

  constructor(private albumsService: AlbumsService) {
    this.newAlbum = '';
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.loaded = false;
    this.albumsService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    });
  }

  addAlbum() {
    const newAlbum: Album = {
      id: this.albums?.length!+1,
      title: this.newAlbum,
      usedId: 1
    };

    this.loaded = false;

    this.albumsService.addAlbum(newAlbum).subscribe(x => {
      this.albums?.push(newAlbum);
      this.newAlbum = '';
      console.log(x);
      this.loaded = true;
    })
  }

  deleteAlbum(id: number) {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      console.log('deleted ' + id);
    });
    this.albums = this.albums?.filter(x => x.id != id);
  }
}
