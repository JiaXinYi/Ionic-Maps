import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookstorePage } from './bookstore';

@NgModule({
  declarations: [
    BookstorePage,
  ],
  imports: [
    IonicPageModule.forChild(BookstorePage),
  ],
})
export class BookstorePageModule {}
