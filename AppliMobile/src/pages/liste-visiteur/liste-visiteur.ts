import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Visiteur } from '../../models/Visiteur';
import { VisiteurProvider } from '../../providers/visiteur/visiteur';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/Storage';


/**
 * Generated class for the ListeVisiteurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-liste-visiteur',
  templateUrl: 'liste-visiteur.html',
})
export class ListeVisiteurPage {

  visiteur: Array<Visiteur>;


  constructor(public navCtrl: NavController, public navParams: NavParams, public visiteurProvider: VisiteurProvider, private storage: Storage) {

    visiteurProvider.getAll().subscribe(
      (datas) => {
        this.visiteur = datas as Array<Visiteur>;
        debugger;
      });
  }

  Deconnexion() {
    this.navCtrl.push(LoginPage);
  }
  

  

  ionViewWillEnter() {
    this.storage.get('session_storage').then((res) => {
      console.log(res);
    });
  }

}
