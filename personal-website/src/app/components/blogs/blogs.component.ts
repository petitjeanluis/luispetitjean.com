import { BloggingService } from './../../services/blogging.service';
import { Component, OnInit } from '@angular/core';
import { NavbarStateService, BackgroundColor, MenuPosition } from './../../services/navbar-state.service';
import { Blog } from 'app/blog';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  public blogs: Blog[];

  constructor(
    private navbarStateService: NavbarStateService,
    private blogginService: BloggingService) { 
    navbarStateService.setBackgroundColor(BackgroundColor.LIGHT);
    navbarStateService.setMenuPosition(MenuPosition.CLOSED);
    
    blogginService.getBlogs().subscribe(
      blogs => {
        this.blogs = blogs;
      }
    );
  }

  ngOnInit() {
    
  }

}
