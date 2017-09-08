import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CallsPage } from './calls';

@NgModule({
  declarations: [
    CallsPage,
  ],
  imports: [
    IonicPageModule.forChild(CallsPage),
  ],
  exports:[CallsPage]
})
export class CallsPageModule {}
