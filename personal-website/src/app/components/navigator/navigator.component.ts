import { Component, OnInit, HostListener } from '@angular/core';
import { NavbarStateService, NavbarState, MenuPosition } from 'app/services/navbar-state.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  private nav: Element;
  private menuItems: NodeListOf<Element>;
  private hamburger: Element;
  public hamburgerOpen: boolean;
  public showDark: boolean;

  constructor(private navbarState: NavbarStateService) {
  }

  ngOnInit() {
    this.menuItems = document.querySelectorAll("#menu li a");
    this.hamburger = document.querySelector('#hamburger');
    this.hamburgerOpen = false;
    this.nav = document.querySelector('nav');

    this.navbarState.getObservable().subscribe((state) => {
      if (state == NavbarState.DARK) {
        this.showDark = true;
        this.hamburger.classList.remove('white');
        this.hamburger.classList.add('dark-blue');
        this.menuItems.forEach((element) => {
          element.classList.add('dark-blue');
          element.classList.remove('white');
        });
      } else {
        this.showDark = false;
        this.hamburger.classList.remove('dark-blue');
        this.hamburger.classList.add('white');
        this.menuItems.forEach((element) => {
          element.classList.add('white');
          element.classList.remove('dark-blue');
        });
      }
    });
  }

  onClickHamburger() {
    if (this.hamburgerOpen) {
      this.hamburger.classList.remove('fa-times');
      this.hamburger.classList.add('fa-navicon');
      this.nav.classList.remove('mobile-background-color');
      this.navbarState.setMenuPosition(MenuPosition.CLOSED);
    } else {
      this.hamburger.classList.remove('fa-navicon');
      this.hamburger.classList.add('fa-times');
      this.nav.classList.add('mobile-background-color');
      this.navbarState.setMenuPosition(MenuPosition.OPEN)
    }
    // toggle
    this.hamburgerOpen = !this.hamburgerOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(this.hamburgerOpen = true) {
      this.onClickHamburger();
    }
  }

}
