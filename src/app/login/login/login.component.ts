import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './shared/user.model';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User;
  hidePassword: boolean;

  constructor() {
    this.user = new User();
  }

  ngOnInit() {
  }

}
