import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { AppComponent } from './app.component';

import { NavbarStateService } from './services/navbar-state.service';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';

@NgModule ({
    declarations: [AppComponent, NavbarComponent, HomeComponent, BlogsComponent],
    imports: [BrowserModule, EditorModule, AppRoutingModule, FormsModule, CommonModule],
    providers: [NavbarStateService],
    bootstrap: [AppComponent]
})
export class AppModule {}