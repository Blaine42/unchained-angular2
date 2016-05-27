import { Injectable } from '@angular/core';
import { CredentialService } from './credential.service';
import { SessionService } from './providers/session.service';
import { environment } from '../../environment';

@Injectable()
export class AuthService {

  private authconnectorservice: SessionService;
  private credentialservice: CredentialService;

  constructor(

  ) {
    this.authconnectorservice = new SessionService();
    this.credentialservice = new CredentialService();
    console.log("test 1", this.credentialservice.isAuthenticated(), this.authconnectorservice);
  }


  authorize() {
    console.log("AuthService -> authorize()", environment);
  }
}
