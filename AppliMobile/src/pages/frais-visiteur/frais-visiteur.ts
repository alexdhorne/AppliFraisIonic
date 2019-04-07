import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FichefraisProvider } from '../../providers/fichefrais/fichefrais';
import { FicheFrais } from '../../models/FicheFrais';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';
import { Subscriber } from 'rxjs/Subscriber';
import { Storage } from '@ionic/Storage';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, public ficheFraisProvider: FichefraisProvider, private storage: Storage) {
  
  
    ficheFraisProvider.getAll().subscribe(
      (datas)=>{
        this.ficheFrais = datas as Array<FicheFrais>;
        debugger;
      });
  }

  ionViewWillEnter() {
    this.storage.get('session_storage').then((res) => {
      console.log(res);
    });
  }

  goToDetail(fiche) {
    this.navCtrl.push('FraisForfaitiseNonForfaitisePage', { fiche: fiche } );
  }
}
