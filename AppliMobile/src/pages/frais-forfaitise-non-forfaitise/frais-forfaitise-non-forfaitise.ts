import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FichefraisProvider } from '../../providers/fichefrais/fichefrais';
import { FicheFrais } from '../../models/FicheFrais';
import { Storage } from '@ionic/Storage';


/**
 * Generated class for the FraisForfaitiseNonForfaitisePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-frais-forfaitise-non-forfaitise',
  templateUrl: 'frais-forfaitise-non-forfaitise.html',
})
export class FraisForfaitiseNonForfaitisePage {


  ficheFrais: Array<FicheFrais>;


  constructor(public navCtrl: NavController, public navParams: NavParams, public ficheFraisProvider: FichefraisProvider, private storage: Storage) {

    //let fiche = navParams.data['fiche'];
    //ficheFraisProvider.getDetailByMois(fiche.mois).subscribe(
    //  (datas) => {
    //    this.ficheFrais = datas as Array<FicheFrais>;
    //    debugger;
    //  });
  }

  ionViewWillEnter() {
    this.storage.get('session_storage').then((res) => {
      console.log(res);
    });
  }



}








 
