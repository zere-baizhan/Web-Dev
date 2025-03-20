import { Component, OnInit } from '@angular/core';
import {Album} from "../models";
import {ActivatedRoute} from "@angular/router";
import {AlbumsService} from "../albums.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  album?: Album;
  loaded?: boolean;
  saving?: boolean;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private albumsService: AlbumsService) {
  }

  ngOnInit(): void {
    this.getAlbum();
  }

  getAlbum() {
    // const id:number = Number(this.route.snapshot.paramMap.get('id'));
    // this.album = ALBUMS.find((x) => x.id === id);

    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.albumsService.getAlbum(id).subscribe((x) => {
          this.album = x;
          this.loaded = true;
      });
    });
  }

  

  updateTitle(album: Album) {
    this.saving = true;
    this.albumsService.updateAlbum(album).subscribe((updated) => {
      console.log(updated);
      this.saving = false;
    });
  }


  goBack() {
    this.location.back();
  }
}
