import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tac-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  title = 'About Us';
  constructor() { }

  ngOnInit(): void {
  }

}
