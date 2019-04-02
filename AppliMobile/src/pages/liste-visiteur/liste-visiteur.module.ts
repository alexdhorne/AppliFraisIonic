import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeVisiteurPage } from './liste-visiteur';

@NgModule({
  declarations: [
    ListeVisiteurPage,
  ],
  imports: [
    IonicPageModule.forChild(ListeVisiteurPage),
  ],
})
export class ListeVisiteurPageModule {}
