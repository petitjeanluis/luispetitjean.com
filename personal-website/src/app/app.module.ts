import { HomeComponent } from './components/home/home.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";

@NgModule ({
    imports: [BrowserModule],
    declarations: [HomeComponent],
    bootstrap: [HomeComponent]
})
export class AppModule {}