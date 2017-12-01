import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  paramsToLogout: any;
  paramsToMenuSidenav: any;

  constructor() { }

  ngOnInit() {
    this.paramsToMenuSidenav = {
      menuSettings: [{
        description: "Convite para usuário",
        route: ['/main/user-register']
      },
      {
        description: "Radio Test",
        route: ['/main/radio-test']
      }
    ], paramsToLogout: {
        routeAfterLogout: ['/login']
      } 
    };
  }

}
