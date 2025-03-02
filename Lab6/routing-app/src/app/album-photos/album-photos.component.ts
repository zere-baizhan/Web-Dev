import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import {Photo} from "../models";
import {AlbumsService} from "../albums.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {

  photos?: Photo[];
  loaded: boolean;

  constructor(private location: Location,
              private albumsService: AlbumsService,
              private route: ActivatedRoute) {
    this.loaded = false;
  }

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      console.log(id);
      this.loaded = false;
      this.albumsService.getPhotos(id).subscribe((photos) => {
        this.photos = photos;
        this.loaded = true;
      });
    });
  }

  goBack() {
    this.location.back();
  }
}
