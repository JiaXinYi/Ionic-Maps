import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapsPage } from './maps';

@NgModule({
  declarations: [
    MapsPage,
  ],
  imports: [
    IonicPageModule.forChild(MapsPage),
  ],
  exports:[MapsPage]
})
export class MapsPageModule {}
