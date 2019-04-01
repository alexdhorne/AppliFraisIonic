// provider api
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/operator/map';

@Injectable()
export class PostProvider {
  server: string = "http://localhost/AppliFraisIonic/serveurAPI/"

  constructor(public http: Http) {

  }

  postData(body, file) {
    let type = "application/json; charset=UTF-8";
    let headers = new Headers({ 'Content-Type': type });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.server + file, JSON.stringify(body), options)
      .map(res => res.json());
      //.map(res => res.text())
      //.map(text => console.log(text));



  }
}