import { ProjectService } from './../../homepage/shared/service/projects.service';
import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/homepage/shared/model/project.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'tac-subject-matters',
  templateUrl: './subject-matters.component.html',
  styleUrls: ['./subject-matters.component.scss']
})
export class SubjectMattersComponent implements OnInit {
  projects;
  constructor(private projectService: ProjectService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.projectService.getProject().subscribe((data: IProject[]) => {
      this.projects = data;
    })
  }

  open(content) {
    this.modalService.open(content, {
      windowClass: 'modal-fade',
      ariaLabelledBy: 'subject-matters-expert',
      centered: true,
      keyboard: true,
      size: 'lg'
    })
  }

}
