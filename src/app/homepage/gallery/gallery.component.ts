import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tac-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  title = 'Gallery';

  constructor() { }

  ngOnInit(): void {
  }

}
