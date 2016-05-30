import { Component, OnInit } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';

import './rxjs-operators';


import { GroupeComponent } from './+groupe';
import { AuthService, CredentialService } from './components';

@Component({
  moduleId: module.id,
  selector: 'angular2-app',
  templateUrl: 'angular2.component.html',
  styleUrls: ['angular2.component.css'],
  providers: [ROUTER_PROVIDERS, AuthService, CredentialService],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  {path: '/groupe', component: GroupeComponent}
])
export class Angular2AppComponent implements OnInit {
  title = 'angular2 works!';

  constructor(
    private authservice: AuthService
  ) {}

  ngOnInit() {
    this.authservice.authorize();
  }
}
