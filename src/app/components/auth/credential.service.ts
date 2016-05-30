import { Injectable } from '@angular/core';
import { AccountService } from './services/account.service';
import { Http, Response } from '@angular/http';
import { User }           from '../user';




@Injectable()
export class CredentialService {

  /**
   * variable d'authentification d'un utilisateur
   * @type {boolean}
   */
  private authenticated: boolean = false;

  public identity: User;
  public errorMessage: string;

  /**
   * constructeur de la classe
   * @param  {AccountService} privateaccount objet correspondant à un compte utilisateur
   * @return {void}
   */
  constructor(private account: AccountService) {}

  isAuthenticated() {
    return this.authenticated;
  }

  getAccount(force?: boolean): Promise<any> {
    console.log('CredentialService -> getAccount()');

    // return new Promise((resolve, reject) => resolve(PROPERTIES));

    // return this.account.getAccount().then(
    //             data => this.identity = JSON.stringify(data), // put the data returned from the server in our variable
    //             error => console.log("Error HTTP GET Service"), // in case of failure show this message
    //             () => console.log("Job Done Get !")//run this code in all cases
    //         );

    return this.account.getAccount().then(
                       data => this.identity = data,
                       error =>  this.errorMessage = <any>error/*,
                       () => console.log(this.identity)*/);
  }
}
