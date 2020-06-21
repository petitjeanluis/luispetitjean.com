import { BloggingService } from './../../services/blogging.service';
import { ActivatedRoute } from '@angular/router';
import { Blog } from './../../blog';
import { Component, OnInit } from '@angular/core';
import { NavbarStateService, BackgroundColor, MenuPosition } from 'app/services/navbar-state.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {

  public blog: Blog;
  public isNew: boolean;
  private id: string;

  constructor(
    private navbarStateService: NavbarStateService,
    private activatedRoute: ActivatedRoute,
    private bloggingService: BloggingService) { 

    this.navbarStateService.setBackgroundColor(BackgroundColor.LIGHT);
    this.navbarStateService.setMenuPosition(MenuPosition.CLOSED);
    this.activatedRoute.params.subscribe(
      params => {
        if (params["id"]) {
          this.id = params["id"]
          this.bloggingService.getBlog(this.id).subscribe(
            blog => {
              this.blog = blog;
              this.isNew = false;
            }
          );
        } else {
          this.blog = new Blog();
          this.isNew = true;
        }
      }
    );
  }

  onDelete() {
    alert('delete not yet implemented');
  }

  onPublish() {
    this.bloggingService.postBlog(this.blog).subscribe(
      data => {
        console.log(data);
      }
    );
  }

  onUpdate() {
    this.bloggingService.putBlog(this.blog).subscribe(
      data => {
        alert("Updated successfully!");
      },
      error => {
        alert("Error updating!");
        console.log(error);
      }
    );
  }
}
