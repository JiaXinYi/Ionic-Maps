import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FilmDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-film-detail',
  templateUrl: 'film-detail.html',
})
export class FilmDetailPage {

  film:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.film = this.navParams.get('film');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmDetailPage');
  }

}
