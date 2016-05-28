import { Injectable } from '@angular/core';
import { CredentialService } from './credential.service';
import { SessionService } from './providers/session.service';
import { environment } from '../../environment';

@Injectable()
export class AuthService {
  /**
   * objet de connexion au service de session
   * @type {SessionService}
   */
  private authconnectorservice: SessionService;

  /**
   * object de gestion du credential
   * @type {CredentialService}
   */
  //private credentialservice: CredentialService;

  private isAuthenticated: boolean;

  /**
   * constructeur de la classe
   */
  constructor(private credentialservice: CredentialService) {
    this.authconnectorservice = new SessionService();
  }


  authorize(force?: boolean) {
    //return this.credentialservice.identity(force).then(function() {
      this.credentialservice.getAccount();
      var isAuthenticated = this.credentialservice.isAuthenticated();

      // an authenticated user can't access to login and register pages
      /*if (isAuthenticated && $rootScope.toState.parent === 'account' && ($rootScope.toState.name === 'login' || $rootScope.toState.name === 'register')) {
        $state.go('home');
      }

      if ($rootScope.toState.data.authorities && $rootScope.toState.data.authorities.length > 0 && !Principal.hasAnyAuthority($rootScope.toState.data.authorities)) {
        if (isAuthenticated) {
          // user is signed in but not authorized for desired state
          $state.go('accessdenied');
        }
        else {
          // user is not authenticated. stow the state they wanted before you
          // send them to the signin state, so you can return them when you're done
          $rootScope.returnToState = $rootScope.toState;
          $rootScope.returnToStateParams = $rootScope.toStateParams;

          // now, send them to the signin state so they can log in
          $state.go('login');
        }
      }
    });*/
  }
}
