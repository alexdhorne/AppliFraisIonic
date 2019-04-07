import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FicheFrais } from '../../models/FicheFrais';
import { FichefraisProvider } from '../../providers/fichefrais/fichefrais';


/**
 * Generated class for the AffichageFicheFraisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-affichage-fiche-frais',
  templateUrl: 'affichage-fiche-frais.html',
})
export class AffichageFicheFraisPage {

  ficheFrais: Array<FicheFrais>;


  constructor(public navCtrl: NavController, public navParams: NavParams, public ficheFraisProvider: FichefraisProvider) {

    ficheFraisProvider.recupfiche().subscribe(
      (datas) => {
        this.ficheFrais = datas as Array<FicheFrais>;
        debugger;
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AffichageFicheFraisPage');
  }

 
}


