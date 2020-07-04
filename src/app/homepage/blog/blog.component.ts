import { Component, OnInit } from '@angular/core';
import { BlogService } from '../shared/service/blog.service';

@Component({
  selector: 'tac-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  title = 'Blog';
  posts;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getAllPost().subscribe((data) => {
      this.posts = data;
      console.log(data)
    })
  }

}
