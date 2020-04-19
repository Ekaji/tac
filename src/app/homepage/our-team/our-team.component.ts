import { Component, OnInit } from '@angular/core';
import { TeamService } from '../shared/team.service';

@Component({
  selector: 'tac-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {
  title = 'Our Team';
  teams = [];

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.teamService.getTeam().subscribe((data: any[]) => {
      this.teams = data;
    })
  }

}
