import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilmPage } from './film';

@NgModule({
  declarations: [
    FilmPage,
  ],
  imports: [
    IonicPageModule.forChild(FilmPage),
  ],
  exports:[FilmPage]
})
export class FilmPageModule {}
