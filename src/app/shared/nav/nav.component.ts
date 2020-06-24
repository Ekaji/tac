import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'tac-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @ViewChild('top', { static: false }) top: ElementRef;
  @ViewChild('middle', { static: false }) middle: ElementRef;
  @ViewChild('bottom', { static: false }) bottom: ElementRef;
  isShow: boolean
  topPosToStartShowing = 50;

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // console.log('[scroll]', scrollPosition);

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

  onClickMe() {
    console.log('working');
    this.top.nativeElement.classList.toggle('top-bar');
    this.middle.nativeElement.classList.toggle('middle-bar');
    this.bottom.nativeElement.classList.toggle('bottom-bar');
  }
}
