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
    let navbarBrand = document.querySelector('.navbar-brand');
    let navbarIcon = document.querySelector('.fa-navicon');
    if (window.pageYOffset > aboutSection.clientHeight - 20) {
      navLinks.forEach(element => {
        element.classList.add('dark-collapse');
      });
      navbarBrand.classList.add('dark')
      navbarIcon.classList.add('dark')
    } else {
      navLinks.forEach(element => {
        element.classList.remove('dark-collapse');
      });
      navbarBrand.classList.remove('dark')
      navbarIcon.classList.remove('dark')
    }
  }

}
