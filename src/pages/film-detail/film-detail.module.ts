import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilmDetailPage } from './film-detail';

@NgModule({
  declarations: [
    FilmDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(FilmDetailPage),
  ],
})
export class FilmDetailPageModule {}
