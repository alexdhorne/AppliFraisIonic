import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FichefraisProvider } from '../../providers/fichefrais/fichefrais';
import { FicheFrais } from '../../models/FicheFrais';

/**
 * Generated class for the FraisVisiteurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-frais-visiteur',
  templateUrl: 'frais-visiteur.html',
})
export class FraisVisiteurPage {

ficheFrais: Array<FicheFrais>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ficheFraisProvider: FichefraisProvider) {
  
  ficheFraisProvider.getAll().subscribe((datas) => {
    this.ficheFrais = Object.keys(datas).map(i => datas[i]);
  debugger;
  });
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FraisVisiteurPage');
  }


  goToDetail() {
    this.navCtrl.push('FraisForfaitiseNonForfaitisePage');
  }
}
