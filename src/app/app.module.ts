import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AnasayfaPage } from '../pages/anasayfa/anasayfa';
import { RetmenGiriIPage } from '../pages/retmen-giri-i/retmen-giri-i';
import { RetmenPaneliPage } from '../pages/retmen-paneli/retmen-paneli';
import { RenciListesiPage } from '../pages/renci-listesi/renci-listesi';
import { RenciGiriIPage } from '../pages/renci-giri-i/renci-giri-i';
import { RenciPaneliPage } from '../pages/renci-paneli/renci-paneli';
import { DersListesiPage } from '../pages/ders-listesi/ders-listesi';
import { MobilUygulamaGeliTirmePage } from '../pages/mobil-uygulama-geli-tirme/mobil-uygulama-geli-tirme';
import { TeknikNgilizcePage } from '../pages/teknik-ngilizce/teknik-ngilizce';
import { VeriYapLarVeAlgoritmalarPage } from '../pages/veri-yap-lar-ve-algoritmalar/veri-yap-lar-ve-algoritmalar';
import { VeriYapLarLaboratuvarPage } from '../pages/veri-yap-lar-laboratuvar/veri-yap-lar-laboratuvar';
import { ElektrikElektronikDevrelerPage } from '../pages/elektrik-elektronik-devreler/elektrik-elektronik-devreler';
import { ElektrikElektronikDevrelerLabPage } from '../pages/elektrik-elektronik-devreler-lab/elektrik-elektronik-devreler-lab';
import { StatistikVeOlasLKPage } from '../pages/statistik-ve-olas-lk/statistik-ve-olas-lk';
import { DiferansiyelDenklemlerPage } from '../pages/diferansiyel-denklemler/diferansiyel-denklemler';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AnasayfaPage,
    RetmenGiriIPage,
    RetmenPaneliPage,
    RenciListesiPage,
    RenciGiriIPage,
    RenciPaneliPage,
    DersListesiPage,
    MobilUygulamaGeliTirmePage,
    TeknikNgilizcePage,
    VeriYapLarVeAlgoritmalarPage,
    VeriYapLarLaboratuvarPage,
    ElektrikElektronikDevrelerPage,
    ElektrikElektronikDevrelerLabPage,
    StatistikVeOlasLKPage,
    DiferansiyelDenklemlerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AnasayfaPage,
    RetmenGiriIPage,
    RetmenPaneliPage,
    RenciListesiPage,
    RenciGiriIPage,
    RenciPaneliPage,
    DersListesiPage,
    MobilUygulamaGeliTirmePage,
    TeknikNgilizcePage,
    VeriYapLarVeAlgoritmalarPage,
    VeriYapLarLaboratuvarPage,
    ElektrikElektronikDevrelerPage,
    ElektrikElektronikDevrelerLabPage,
    StatistikVeOlasLKPage,
    DiferansiyelDenklemlerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}