import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  icons = [{'url':'mailto:toughgarfield@outlook.com','icon':'icon-envelope'},
  {'url':'./assets/weChat.png','icon':'icon-wechat'},
  {'url':'https://www.facebook.com/profile.php?id=100009098138390','icon':'icon-facebook'},
  {'url':'https://www.linkedin.com/in/kaite-tang-1ab570111/','icon':'icon-linkedin'},
  {'url':'https://github.com/Bk2ol','icon':'icon-github-square'}]
  constructor() { }

  ngOnInit() {
  }

}
