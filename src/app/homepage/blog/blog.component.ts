import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tac-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  title = 'Blog';

  constructor() { }

  ngOnInit(): void {
  }

}
