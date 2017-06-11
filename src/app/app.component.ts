import { Component, Input } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public mainPage : string;
  constructor() {
    this.mainPage = "Profile";         
  }  
}
