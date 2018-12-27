import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RenciPaneliPage } from '../renci-paneli/renci-paneli';
import { DersListesiPage } from '../ders-listesi/ders-listesi';
import { MobilUygulamaGeliTirmePage } from '../mobil-uygulama-geli-tirme/mobil-uygulama-geli-tirme';
import { TeknikNgilizcePage } from '../teknik-ngilizce/teknik-ngilizce';
import { VeriYapLarVeAlgoritmalarPage } from '../veri-yap-lar-ve-algoritmalar/veri-yap-lar-ve-algoritmalar';
import { VeriYapLarLaboratuvarPage } from '../veri-yap-lar-laboratuvar/veri-yap-lar-laboratuvar';
import { ElektrikElektronikDevrelerPage } from '../elektrik-elektronik-devreler/elektrik-elektronik-devreler';
import { ElektrikElektronikDevrelerLabPage } from '../elektrik-elektronik-devreler-lab/elektrik-elektronik-devreler-lab';
import { StatistikVeOlasLKPage } from '../statistik-ve-olas-lk/statistik-ve-olas-lk';
import { DiferansiyelDenklemlerPage } from '../diferansiyel-denklemler/diferansiyel-denklemler';

@Component({
  selector: 'page-renci-giri-i',
  templateUrl: 'renci-giri-i.html'
})
export class RenciGiriIPage {

  constructor(public navCtrl: NavController) {
  }
  goToRenciPaneli(params){
    if (!params) params = {};
    this.navCtrl.push(RenciPaneliPage);
  }goToDersListesi(params){
    if (!params) params = {};
    this.navCtrl.push(DersListesiPage);
  }goToMobilUygulamaGeliTirme(params){
    if (!params) params = {};
    this.navCtrl.push(MobilUygulamaGeliTirmePage);
  }goToTeknikNgilizce(params){
    if (!params) params = {};
    this.navCtrl.push(TeknikNgilizcePage);
  }goToVeriYapLarVeAlgoritmalar(params){
    if (!params) params = {};
    this.navCtrl.push(VeriYapLarVeAlgoritmalarPage);
  }goToVeriYapLarLaboratuvar(params){
    if (!params) params = {};
    this.navCtrl.push(VeriYapLarLaboratuvarPage);
  }goToElektrikElektronikDevreler(params){
    if (!params) params = {};
    this.navCtrl.push(ElektrikElektronikDevrelerPage);
  }goToElektrikElektronikDevrelerLab(params){
    if (!params) params = {};
    this.navCtrl.push(ElektrikElektronikDevrelerLabPage);
  }goToStatistikVeOlasLK(params){
    if (!params) params = {};
    this.navCtrl.push(StatistikVeOlasLKPage);
  }goToDiferansiyelDenklemler(params){
    if (!params) params = {};
    this.navCtrl.push(DiferansiyelDenklemlerPage);
  }
}
