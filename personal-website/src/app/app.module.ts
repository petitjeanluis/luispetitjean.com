import { NavigatorComponent } from './components/navigator/navigator.component';
import { HomeComponent } from './components/home/home.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";

@NgModule ({
    imports: [BrowserModule],
    declarations: [HomeComponent, NavigatorComponent],
    bootstrap: [HomeComponent]
})
export class AppModule {}