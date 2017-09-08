import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from './../../providers/api/api';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the FilmPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-film',
  templateUrl: 'film.html',
})
export class FilmPage {
  films: Observable<any>;
  
   constructor(public navCtrl: NavController,public apiProvider: ApiProvider
    //  public http: Http
    ) { 
    this.films = this.apiProvider.getFilms();
    // this.films = this.http.get('http://swapi.co/api/films').map(res => res.json());
// 输出到控制台
    // this.films = this.http.get('http://swapi.co/api/films');
    // this.films
    // .map(res => res.json())
    // .subscribe(data => {
    //   console.log('my data: ', data);
    // })
   }
   openDetails(film){
     this.navCtrl.push('FilmDetailPage',{film:film});
   }
}
