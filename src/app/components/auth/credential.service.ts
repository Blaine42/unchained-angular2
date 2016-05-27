import { Injectable } from '@angular/core';

@Injectable()
export class CredentialService {

  identity: boolean = false;
  authenticated: boolean = false;


  constructor() {
    console.log('test 2');
  }

  isAuthenticated() {
    return this.authenticated;
  }
}
