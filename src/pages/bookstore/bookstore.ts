import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BookstorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var BMap;

@IonicPage()
@Component({
  selector: 'page-bookstore',
  templateUrl: 'bookstore.html',
})
export class BookstorePage {
  @ViewChild('map') map_container3: ElementRef;
  map: any;
  myIcon: any;

  constructor() {
    this.myIcon = new BMap.Icon("assets/icon/favicon.ico", new BMap.Size(30, 30));
  }

  ionViewDidLoad() {
    let map =
      this.map =
      new BMap.Map(
        this.map_container3.nativeElement,
        {
          enableMapClick: false,//底图可点模式
        }
      );//创建地图实例
    map.enableScrollWheelZoom();
    let point = new BMap.Point(113.38028471135, 23.129702256122);//坐标可以通过百度地图坐标拾取器获取
    let marker = new BMap.Marker(point);
    this.map.addOverlay(marker);
    map.centerAndZoom(point, 18);//设置中心和地图显示级别

    var local = new BMap.LocalSearch(map, {
      renderOptions: {
        map: map,
        selectFirstResult: true,
        autoViewport: true
      },
      onMarkersSet: ((res) => {
        res.forEach(function (e, i) {
          let myIcon = new BMap.Icon("assets/icon/favicon.ico", new BMap.Size(30, 30));

          let marker = new BMap.Marker(e.point, myIcon);
          marker.addEventListener("click", function () {
            console.log(e.address);
          });
        })
      })
    });
    var index = 0;
    var adds = [
      "博尔赫斯书店",
      "方所书店",
      "联合书店",
      "唐宁书店",
      "1200bookshop",
      "学而优",
      "小古堂书店",
      "BensHoP书店",
      "以撒书房",
      "禾田书房"
    ];
    // local.search("1200bookshop", { forceLocal: true });
    local.search("1200bookshop", { forceLocal: true });
    let searchArr = local.getResults();


  }
}