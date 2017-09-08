// import { Component, OnInit } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/delay';

// /**
//  * Generated class for the CallsPage page.
//  *
//  * See http://ionicframework.com/docs/components/#navigation for more info
//  * on Ionic pages and navigation.
//  */

// @IonicPage()
// @Component({
//   selector: 'page-calls',
//   template: `
//   <ul>
//     <li *ngFor="let item of collection;trackBy: trackByFn">{{item.id}}</li>
//   </ul>
//   <button (click)="getItems()">Refresh items</button>
//   <ng-template #fetching>
//   <p>Fetching...</p>
// </ng-template>
// <p *ngIf="auth | async; else fetching; let user">
//   {{user.username }}
// </p>
// <p>{{address | json}}</p>
// `
// })
// export class CallsPage1 {
//   auth: Observable<{}>;
//   address = {
//     province: '福建',
//     city: '厦门'
//   }

//   collection: any;

//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//     this.collection = [{ id: 1 }, { id: 2 }, { id: 3 }];

//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad CallsPage');
//   }
//   ngOnInit() {
//     this.auth = Observable
//       .of({ username: 'semlinker', password: 'segmentfault' })
//       .delay(new Date(Date.now() + 2000));
//   }
//   getItems() {
//     this.collection = this.getItemsFromServer();
//   }

//   getItemsFromServer() {
//     return [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
//   }

//   trackByFn(index, item) {
//     return index; // or item.id
//   }
// }
