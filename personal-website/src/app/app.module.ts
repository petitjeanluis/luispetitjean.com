import { BloggingService } from './services/blogging.service';
import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { EditorComponent } from './components/editor/editor.component';

import { NavbarStateService } from './services/navbar-state.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule ({
    declarations: [AppComponent, NavbarComponent, HomeComponent, BlogsComponent, BlogComponent, EditorComponent],
    imports: [BrowserModule, CommonModule, EditorModule, AppRoutingModule, FormsModule, HttpClientModule],
    providers: [NavbarStateService, BloggingService],
    bootstrap: [AppComponent]
})
export class AppModule {}