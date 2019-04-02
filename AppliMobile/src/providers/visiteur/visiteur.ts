import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';

/*
  Generated class for the FichefraisProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VisiteurProvider {

  constructor(public http: HttpClient) {
    
  }

  url = 'http://localhost/AppliFrais/mobileData/';

  getAll(){
    return this.http.get(this.url + 'visiteur.php');
  }

}
