import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FraisVisiteurPage');
  }

  goToDetail() {
    this.navCtrl.push('FraisForfaitiseNonForfaitisePage');
  }
}
