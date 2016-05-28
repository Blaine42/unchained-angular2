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

  /**
   * constructeur de la classe
   * @param  {AccountService} privateaccount objet correspondant à un compte utilisateur
   * @return {void}
   */
  constructor(private account: AccountService) {}

  isAuthenticated() {
    return this.authenticated;
  }

  getAccount() {
    this.account.getAccount();
  }
}
