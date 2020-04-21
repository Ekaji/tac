import { TeamService } from '../shared/service/team.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { Iteam } from '../shared/model/team.model';

@Component({
  selector: 'tac-inline-blog',
  templateUrl: './inline-blog.component.html',
  styleUrls: ['./inline-blog.component.scss']
})
export class InlineBlogComponent implements OnInit {
  @ViewChild('inblog', { read: DragScrollComponent }) ds: DragScrollComponent;
  team = [];

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }
  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.teamService.getTeam().subscribe((data: Iteam[]) => {
      this.team = data
    })
  }

}
