import { BlogComponent } from './components/blog/blog.component';
import { EditorComponent } from './components/editor/editor.component';
import { HomeComponent } from './components/home/home.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';


const appRoutes: Routes = [
  { path: 'blog/:id', component: BlogComponent },
  { path: 'blog/', redirectTo: "blogs" },
  { path: 'blogs', component: BlogsComponent },
  { path: 'editor', component: EditorComponent},
  { path: 'editor/:id', component: EditorComponent},
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
