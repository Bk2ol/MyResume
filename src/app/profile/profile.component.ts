import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  skills = [{'type':'Programming :', 'detail':'Java, Javascript, C++, Python'},
  {'type':'Web:', 'detail':'HTML5, CSS3, XML, Json'},
  {'type':'Database software :', 'detail':'Mysql'},
  {'type':'Framework and tools :', 'detail':'SpringMVC, Hibernate, Junit, Maven, AngularJS,JQuery, Bootstrap'},
  {'type':'Language :', 'detail':'Mandarin, Engilsh'}]
  constructor() { }

  ngOnInit() {
  }

}
