import { NavbarStateService, NavbarState, BackgroundColor } from 'app/services/navbar-state.service';
import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private aboutSection: Element;

  constructor(private navbarStateService: NavbarStateService) {
  }

  ngOnInit() { 
    this.aboutSection = document.querySelector('.about');
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(e) {
    if (window.pageYOffset > this.aboutSection.clientHeight - 20) {
      if (this.navbarStateService.getBackgroundColor() != BackgroundColor.LIGHT) {
        this.navbarStateService.setBackgroundColor(BackgroundColor.LIGHT);
      }
    } else {
      if (this.navbarStateService.getBackgroundColor() != BackgroundColor.DARK) {
        this.navbarStateService.setBackgroundColor(BackgroundColor.DARK);
      }
    }
  }

}
