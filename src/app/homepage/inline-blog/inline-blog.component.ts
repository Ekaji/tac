import { TeamService } from '../shared/service/team.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { Iteam } from '../shared/model/team.model';
import { BlogService } from '../shared/service/blog.service';

@Component({
  selector: 'tac-inline-blog',
  templateUrl: './inline-blog.component.html',
  styleUrls: ['./inline-blog.component.scss']
})
export class InlineBlogComponent implements OnInit {
  @ViewChild('inblog', { read: DragScrollComponent }) ds: DragScrollComponent;
  posts;
  team = [];

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }
  constructor(private teamService: TeamService, private blogService: BlogService) { }

  ngOnInit(): void {
    this.teamService.getTeam().subscribe((data: Iteam[]) => {
      this.team = data
    })

    this.blogService.getAllPost().subscribe((data) => {
      this.posts = data;
      console.log(data)
    })
  }

}
