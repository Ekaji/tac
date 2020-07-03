import { ProjectService } from './../../homepage/shared/service/projects.service';
import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/homepage/shared/model/project.model';

@Component({
  selector: 'tac-subject-matters',
  templateUrl: './subject-matters.component.html',
  styleUrls: ['./subject-matters.component.scss']
})
export class SubjectMattersComponent implements OnInit {
  projects;
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProject().subscribe((data: IProject[]) => {
      this.projects = data;
    })
  }

}
