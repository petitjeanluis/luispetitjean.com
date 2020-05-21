import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(e) {
    let aboutSection = document.querySelector('.about');
    let navLinks = document.querySelectorAll('.nav-link');
    let logo = document.querySelector('.logo');
    let navbarIcon = document.querySelector('.fa-navicon');
    if (window.pageYOffset > aboutSection.clientHeight - 20) {
      navLinks.forEach(element => {
        element.classList.add('dark-collapse');
      });
      logo.setAttribute('src','/assets/blue-logo.png');
      navbarIcon.classList.add('dark')
    } else {
      navLinks.forEach(element => {
        element.classList.remove('dark-collapse');
      });
      logo.setAttribute('src','/assets/white-logo.png');
      navbarIcon.classList.remove('dark')
    }
  }

}
