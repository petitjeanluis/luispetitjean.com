import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export enum NavbarState {
  DARK,
  LIGHT,
}

export enum BackgroundColor {
  DARK,
  LIGHT
}

export enum MenuPosition {
  OPEN,
  CLOSED
}

@Injectable()
export class NavbarStateService {

  private backgroundColor: BackgroundColor;
  private menuPosition: MenuPosition;
  private navbarState: BehaviorSubject<NavbarState>;

  constructor() { 
    this.backgroundColor = BackgroundColor.DARK;
    this.menuPosition = MenuPosition.CLOSED;
    this.navbarState = new BehaviorSubject<NavbarState>(NavbarState.LIGHT);
  }

  public setBackgroundColor(newBackgroundColor: BackgroundColor) {
    this.backgroundColor = newBackgroundColor;
    this.updateNavbarState();
  }

  public setMenuPosition(newMenuPosition: MenuPosition) {
    this.menuPosition = newMenuPosition;
    this.updateNavbarState();
  }

  public getBackgroundColor() {
    return this.backgroundColor;
  }

  private updateNavbarState() {
    if (this.backgroundColor == BackgroundColor.LIGHT && this.menuPosition == MenuPosition.CLOSED) {
      this.navbarState.next(NavbarState.DARK)
    } else {
      this.navbarState.next(NavbarState.LIGHT)
    }
  }

  public getObservable(): Observable<NavbarState> {
    return this.navbarState.asObservable();
  }

}
