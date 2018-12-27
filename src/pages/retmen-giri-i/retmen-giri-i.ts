import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RetmenPaneliPage } from '../retmen-paneli/retmen-paneli';
import { RenciListesiPage } from '../renci-listesi/renci-listesi';

@Component({
  selector: 'page-retmen-giri-i',
  templateUrl: 'retmen-giri-i.html'
})
export class RetmenGiriIPage {

  constructor(public navCtrl: NavController) {
  }
  goToRetmenPaneli(params){
    if (!params) params = {};
    this.navCtrl.push(RetmenPaneliPage);
  }goToRenciListesi(params){
    if (!params) params = {};
    this.navCtrl.push(RenciListesiPage);
  }
}
