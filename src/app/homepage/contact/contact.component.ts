import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tac-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  title = 'Contact Us';

  constructor() { }

  ngOnInit(): void {
  }

}
