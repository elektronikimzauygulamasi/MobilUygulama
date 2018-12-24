import { Component } from '@angular/core';
import { OgrencigirisPage } from '../ogrencigiris/ogrencigiris';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  [x: string]: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  sayfa(){
    this.navCtrl.push(OgrencigirisPage);
  }
}
