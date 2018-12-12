import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GestionUtilisateurAdminPage } from './gestion-utilisateur-admin';

@NgModule({
  declarations: [
    GestionUtilisateurAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(GestionUtilisateurAdminPage),
  ],
})
export class GestionUtilisateurAdminPageModule {}
