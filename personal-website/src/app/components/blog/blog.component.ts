import { Blog } from './../../blog';
import { BloggingService } from './../../services/blogging.service';
import { Component, OnInit } from '@angular/core';
import { NavbarStateService, BackgroundColor, MenuPosition } from './../../services/navbar-state.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  private id: string
  public blog: Blog;

  constructor(
    private navbarStateService: NavbarStateService,
    private route: ActivatedRoute,
    private bloggingService: BloggingService) { 
    // Configure navbar for this page
    navbarStateService.setBackgroundColor(BackgroundColor.LIGHT);
    navbarStateService.setMenuPosition(MenuPosition.CLOSED);

    // Get blog
    route.params.subscribe((params) => {
      bloggingService.getBlog(params["id"]).subscribe(
        blog => {
          this.blog = blog;
        }
      );
    })
  }

  ngOnInit() {
  }

}
