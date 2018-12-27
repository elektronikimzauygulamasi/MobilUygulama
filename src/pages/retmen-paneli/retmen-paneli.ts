import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RenciListesiPage } from '../renci-listesi/renci-listesi';

@Component({
  selector: 'page-retmen-paneli',
  templateUrl: 'retmen-paneli.html'
})
export class RetmenPaneliPage {

  constructor(public navCtrl: NavController) {
  }
  goToRenciListesi(params){
    if (!params) params = {};
    this.navCtrl.push(RenciListesiPage);
  }
}
