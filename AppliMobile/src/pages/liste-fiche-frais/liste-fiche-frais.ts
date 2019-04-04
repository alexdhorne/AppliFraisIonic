import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListeFicheFraisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-liste-fiche-frais',
  templateUrl: 'liste-fiche-frais.html',
})
export class ListeFicheFraisPage {

  idVisiteur: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private postPvdr: PostProvider, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListeFicheFraisPage');
  }


  RecupFiche() {
    if (this.idVisiteur != "") {
      let body = {
        idVisiteur: this.idVisiteur,
        //groupe: this.groupe,
        aksi: 'RecupFiche'
      };

      this.postPvdr.postData(body, 'file_aksi.php').subscribe((data) => {
        var alertpesan = data.msg;
        if (data.success) {
          this.storage.set('session_storage', data.result);
          //this.navCtrl.setRoot(ListeVisiteurPage);
          console.log(data);


        }

      });
    }
  }
}