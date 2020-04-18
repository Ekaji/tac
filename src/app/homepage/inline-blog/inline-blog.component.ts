import { Component, OnInit, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'tac-inline-blog',
  templateUrl: './inline-blog.component.html',
  styleUrls: ['./inline-blog.component.scss']
})
export class InlineBlogComponent implements OnInit {
  @ViewChild('inblog', { read: DragScrollComponent }) ds: DragScrollComponent;

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
