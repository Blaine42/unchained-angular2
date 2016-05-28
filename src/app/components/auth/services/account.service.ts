// Promise Version
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { User }           from '../../user';

//import {Observable} from 'rxjs/Rx';
//import 'rxjs/add/operator/map';


@Injectable()
export class AccountService {
  constructor (private http: Http) {}

  // URL to web api
  private heroesUrl = 'app/heroes.json';

  getAccount () {
    return this.http.get(this.heroesUrl)
                    .map(this.extractData);
  }

  /*addHero (name: string): Promise<User> {
    let body = JSON.stringify({ name });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.heroesUrl, body, options)
               .toPromise()
               .then(this.extractData)
               .catch(this.handleError);
  }*/

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }

}
