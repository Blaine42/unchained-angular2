import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { AccountService } from './app/components/auth'
import { Angular2AppComponent, environment } from './app/';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

if (environment.production) {
  enableProdMode();
}

bootstrap(Angular2AppComponent, [ HTTP_PROVIDERS, AccountService ]);
