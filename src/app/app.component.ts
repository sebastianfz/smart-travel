import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isAdminPanel: boolean = false;
  title = 'Smart Travel';


  ngOnInit(): void {
    this.isAdminPanel = window.location.href.indexOf('admin-panel') > -1;
  }

}
