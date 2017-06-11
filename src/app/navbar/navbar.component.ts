import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  
  public items = [{'name':'Profile','url':'#','icon':"icon-files-o" },
          {'name':'Education','url':'#','icon':"icon-graduation-cap" },
          {'name':'Experience','url':'#','icon':"icon-black-tie" },
          {'name':'Projects','url':'#','icon':"icon-tasks" },];
  public mainPage = 'Profile';
  
  @Output() childEvent = new EventEmitter<string>();
  constructor() { }
  changeContent(item){
    this.mainPage = item.name;
    this.childEvent.emit(item.name);
  }
  ngOnInit() {
  }
  preventDefault(){
    return false;
  }
}
