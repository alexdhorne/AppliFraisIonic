import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FraisForfaitiseNonForfaitisePage');
  }

}
