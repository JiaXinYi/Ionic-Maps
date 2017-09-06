import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// baidu map
// declare var BMap;

// gaode map
declare var AMap;

//google map
// declare var google;

@IonicPage()
@Component({
  selector: 'page-gaodemap',
  templateUrl: 'gaodemap.html',
})
export class GaodeMapPage {
  // gaodemap

  @ViewChild('map2') map_container2: ElementRef;
  map: any;//地图对象

  constructor() {
  }

  ionViewDidEnter() {
    this.load();
  }
  load(){
    this.map = new AMap.Map(this.map_container2.nativeElement, {
      view: new AMap.View2D({//创建地图二维视口
        center:[113.23,23.16],
        zoom: 16, //设置地图缩放级别
        rotateEnable: true,
        showBuildingBlock: true
      })
    });
  }

}
