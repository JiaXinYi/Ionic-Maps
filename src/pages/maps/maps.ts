import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapsPage');
  }


  loadGoogleMap() {
    this.navCtrl.push('GoogleMapPage');
  }
  loadGaodeMap() {
    this.navCtrl.push('GaodeMapPage');
  }
  loadBaiduMap() {
    this.navCtrl.push('BaiduMapPage');
  }
}
