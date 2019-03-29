import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';

/*
  Generated class for the FichefraisProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FichefraisProvider {

  constructor(public http: HttpClient) {
    
  }

  url = 'http://localhost/AppliFrais/mobileData/';

  getAll(){
    return this.http.get(this.url + 'fiche_frais.php');
  }

  getDetailByMois(mois: string) {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('mois', mois)
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    return this.http.post(this.url + 'detail.php', httpParams, options);
  }

}
