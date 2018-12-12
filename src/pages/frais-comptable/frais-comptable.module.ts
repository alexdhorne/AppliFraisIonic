import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FraisComptablePage } from './frais-comptable';

@NgModule({
  declarations: [
    FraisComptablePage,
  ],
  imports: [
    IonicPageModule.forChild(FraisComptablePage),
  ],
})
export class FraisComptablePageModule {}
