import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GaodeMapPage } from './gaodemap';

@NgModule({
  declarations: [
    GaodeMapPage,
  ],
  imports: [
    IonicPageModule.forChild(GaodeMapPage),
  ],
  exports:[GaodeMapPage]
})
export class GaodeMapPageModule {}
