import { Injectable } from '@angular/core';
import { AccountService } from './services/account.service';
import { Http, Response } from '@angular/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class CredentialService {

  /**
   * variable d'authentification d'un utilisateur
   * @type {boolean}
   */
  private authenticated: boolean = false;

  public identity;

  /**
   * constructeur de la classe
   * @param  {AccountService} privateaccount objet correspondant à un compte utilisateur
   * @return {void}
   */
  constructor(private account: AccountService) {}

  isAuthenticated() {
    return this.authenticated;
  }

  getAccount(force?: boolean) {
    console.log('CredentialService -> getAccount()');
    return this.account.getAccount().subscribe(
                data => this.identity = JSON.stringify(data), // put the data returned from the server in our variable
                error => console.log("Error HTTP GET Service"), // in case of failure show this message
                () => console.log("Job Done Get !")//run this code in all cases
            );
  }
}
