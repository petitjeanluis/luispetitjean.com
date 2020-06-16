import { Component, OnInit, HostListener } from '@angular/core';
import { NavbarStateService, NavbarState, MenuPosition } from 'app/services/navbar-state.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private menuItems: NodeListOf<Element>;
  public hamburgerOpen: boolean;
  public showDark: boolean;

  constructor(private navbarState: NavbarStateService) {
  }

  ngOnInit() {
    this.menuItems = document.querySelectorAll("#menu li a");
    this.hamburgerOpen = false;

    this.navbarState.getObservable().subscribe((state) => {
      if (state == NavbarState.DARK) {
        this.showDark = true;
        this.menuItems.forEach((element) => {
          element.classList.add('dark-blue');
          element.classList.remove('white');
        });
      } else {
        this.showDark = false;
        this.menuItems.forEach((element) => {
          element.classList.add('white');
          element.classList.remove('dark-blue');
        });
      }
    });
  }

  onClickHamburger() {
    if (this.hamburgerOpen) {
      this.navbarState.setMenuPosition(MenuPosition.CLOSED);
    } else {
      this.navbarState.setMenuPosition(MenuPosition.OPEN)
    }
    this.hamburgerOpen = !this.hamburgerOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(this.hamburgerOpen = true) {
      this.onClickHamburger();
    }
  }
}