import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, DateTime } from 'ionic-angular';
import { PostProvider } from '../../providers/post-provider';



@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {


  login: string = "";
  mdp: string = "";
  nom: string = "";
  prenom: string = "";
  adresse: string = "";
  groupe: string = "";
  cp: string = "";
  dateEmbauche: string = "";
  ville: string = "";



  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private postPvdr: PostProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  AjoutUtilisateur() {
    console.log(this.login);
    //validation
    if (this.nom == "") {
      const toast = this.toastCtrl.create({
        message: 'Un nom est requis.',
        duration: 2000
      });
      toast.present();
    } else if (this.prenom == "") {
      const toast = this.toastCtrl.create({
        message: 'Un prenom est requis.',
        duration: 2000
      });
      toast.present();
    } else if (this.login == "") {
      const toast = this.toastCtrl.create({
        message: 'Un login est requis.',
        duration: 2000
      });
      toast.present();
    } else if (this.mdp == "") {
      const toast = this.toastCtrl.create({
        message: 'Un mot de passe est requis.',
        duration: 2000
      });
      toast.present();
    } else if (this.groupe == "") {
      const toast = this.toastCtrl.create({
        message: 'Un groupe est requis.',
        duration: 2000
      });
      toast.present();
    } else if (this.adresse == "") {
      const toast = this.toastCtrl.create({
        message: 'Une adresse est requise.',
        duration: 2000
      });
      toast.present();
    } else if (this.cp == "") {
      const toast = this.toastCtrl.create({
        message: 'Un code postal est requis.',
        duration: 2000
      });
      toast.present();
    } else if (this.ville == "") {
      const toast = this.toastCtrl.create({
        message: 'Une ville est requise.',
        duration: 2000
      });
      toast.present();
    } else if (this.dateEmbauche == "") {
      const toast = this.toastCtrl.create({
        message: 'Une date dembauche est requise.',
        duration: 2000
      });
      toast.present();

    } else {
      let body = {
        login: this.login,
        mdp: this.mdp,
        nom: this.nom,
        prenom: this.prenom,
        adresse: this.adresse,
        groupe: this.groupe,
        cp: this.cp,
        ville: this.ville,
        dateEmbauche: this.dateEmbauche,
        aksi: 'ajoutUtilisateur'
      };
      this.postPvdr.postData(body, 'file_aksi.php').subscribe((data) => {
        var alertpesan = data.msg;
        if (data.success) {
          this.navCtrl.pop();
          const toast = this.toastCtrl.create({
            message: 'ajout réussi.',
            duration: 2000
          });
          toast.present();
        } else {
          const toast = this.toastCtrl.create({
            message: alertpesan,
            duration: 2000
          });
          toast.present();
        }

      });
    }
  }

}
