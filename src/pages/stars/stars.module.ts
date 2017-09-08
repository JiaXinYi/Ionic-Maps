import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StarsPage } from './stars';

@NgModule({
  declarations: [
    StarsPage,
  ],
  imports: [
    IonicPageModule.forChild(StarsPage),
  ],
  exports:[StarsPage]
})
export class StarsPageModule {}
