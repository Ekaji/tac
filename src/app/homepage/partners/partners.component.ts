import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tac-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  title = 'Our Partners';

  constructor() { }

  ngOnInit(): void {
  }

}
