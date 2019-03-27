import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FichefraisProvider } from '../../providers/fichefrais/fichefrais';
import { FicheFrais } from '../../models/FicheFrais';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';
import { Subscriber } from 'rxjs/Subscriber';

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
  
  // this.ficheFrais = new Array<FicheFrais>();
  //   let fiche1 = new FicheFrais();
  // fiche1.mois = 1;
  // fiche1.annee = 2019;
  // fiche1.etat = "créer";
  // fiche1.montant = 100;
  // this.ficheFrais.push(fiche1);

  // let fiche2 = new FicheFrais();
  // fiche2.mois = 2;
  // fiche2.annee = 2019;
  // fiche2.etat = "créer";
  // fiche2.montant = 150;
  // this.ficheFrais.push(fiche2);

  // let fiche3 = new FicheFrais();
  // fiche3.mois = 3;
  // fiche3.annee = 2019;
  // fiche3.etat = "créer";
  // fiche3.montant = 200;
  // this.ficheFrais.push(fiche3);

  // let fiche4 = new FicheFrais();
  // fiche4.mois = 4;
  // fiche4.annee = 2019;
  // fiche4.etat = "créer";
  // fiche4.montant = 250;
  // this.ficheFrais.push(fiche4);

  // let fiche5 = new FicheFrais();
  // fiche5.mois = 5;
  // fiche5.annee = 2019;
  // fiche5.etat = "créer";
  // fiche5.montant = 300;
  // this.ficheFrais.push(fiche5);
  ficheFraisProvider.getAll().subscribe(
    (datas)=>{
      this.ficheFrais = datas as Array<FicheFrais>;
      debugger;
    });
  }
  


  ionViewDidLoad() {
    console.log('ionViewDidLoad FraisVisiteurPage');
  }


  goToDetail(fiche) {
    this.navCtrl.push('FraisForfaitiseNonForfaitisePage', { fiche: fiche } );
  }
}
