import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FichefraisProvider } from '../../providers/fichefrais/fichefrais';
import { FicheFrais } from '../../models/FicheFrais';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';
import { Subscriber } from 'rxjs/Subscriber';
import { Storage } from '@ionic/Storage';
import { LoginPage } from '../login/login';


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

  ficheFrais: FicheFrais[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public ficheFraisProvider: FichefraisProvider, private storage: Storage) {

    this.storage.get('session_storage').then((datas) => {
      ficheFraisProvider.getById(datas['id']).subscribe((d) => {
        this.ficheFrais = d as FicheFrais[];
        debugger;
      });
    });

  }

  //ionViewWillEnter() {
  //  this.storage.get('session_storage').then((res) => {
  //    console.log(res);
  //  });
  //}

  Retour() {
    this.navCtrl.push(LoginPage);
  }

  goToDetail(fiche) {
    this.navCtrl.push('FraisForfaitiseNonForfaitisePage', { fiche: fiche } );
  }
}
