import { NavbarStateService, BackgroundColor, MenuPosition } from 'app/services/navbar-state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  editorOutput: string;
  dataModel: any;

  constructor(private navbarStateService: NavbarStateService) { 
    navbarStateService.setBackgroundColor(BackgroundColor.LIGHT);
    navbarStateService.setMenuPosition(MenuPosition.CLOSED);
  }

  ngOnInit() {
    
  }

}
