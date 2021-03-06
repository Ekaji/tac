import { GalleryService } from '../shared/service/gallery.service';
import { Component, OnInit } from '@angular/core';
import { IGallery } from '../shared/model/gallery.model';

@Component({
  selector: 'tac-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  title = 'Gallery';
  gallery = []
  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.galleryService.getGallery().subscribe((data: IGallery[]) => {
      this.gallery = data;
    })
  }

}
