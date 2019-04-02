import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/Storage';
import { FraisVisiteurPage } from '../frais-visiteur/frais-visiteur';
import { RegisterPage } from '../register/register';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  login: string;
  mdp: string;
  groupe: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private postPvdr: PostProvider, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  connexion() {
    if (this.login != "" && this.mdp != "") {
      let body = {
        login: this.login,
        mdp: this.mdp,
        //groupe: this.groupe,
        aksi: 'connexion'
      };

      this.postPvdr.postData(body, 'file_aksi.php').subscribe((data) => {
        var alertpesan = data.msg;
        if (data.success) {
          this.storage.set('session_storage', data.result);
          this.navCtrl.setRoot(FraisVisiteurPage);
          const toast = this.toastCtrl.create({
            message: 'Connexion réussie.',
            duration: 2000
          });
          toast.present();
          console.log(data);
        } else {
          const toast = this.toastCtrl.create({
            message: alertpesan,
            duration: 2000
          });
          toast.present();
        }
      });

    } else {
      const toast = this.toastCtrl.create({
        message: 'Identifiant ou mot de passe introuvable',
        duration: 2000
      });
      toast.present();
    }
  }


  Inscription() {
    this.navCtrl.push(RegisterPage);
  }

}
