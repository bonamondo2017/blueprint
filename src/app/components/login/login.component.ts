import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public paramsToLogin: any;

  constructor() { }

  ngOnInit() {
    this.paramsToLogin = {
      routeAfterLoggedIn: ['/main'],
      imageTitle: './../assets/img/logo-ntm-black.png',
      textTitle: 'Acesso ao NTM',
      helpUrlAndIcon: {
        googleIcon: 'help',
        url:'http://www.google.com'
      },
      forgotPassword: true
    }
  }

}
