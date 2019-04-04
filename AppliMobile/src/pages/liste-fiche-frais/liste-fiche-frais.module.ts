import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeFicheFraisPage } from './liste-fiche-frais';

@NgModule({
  declarations: [
    ListeFicheFraisPage,
  ],
  imports: [
    IonicPageModule.forChild(ListeFicheFraisPage),
  ],
})
export class ListeFicheFraisPageModule {}
