import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Visiteur } from '../../models/Visiteur';
import { VisiteurProvider } from '../../providers/visiteur/visiteur';

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


  constructor(public navCtrl: NavController, public navParams: NavParams, public visiteurProvider: VisiteurProvider) {

    visiteurProvider.getAll().subscribe(
      (datas) => {
        this.visiteur = datas as Array<Visiteur>;
        debugger;
      });
  }

  

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListeVisiteurPage');
  }

}
