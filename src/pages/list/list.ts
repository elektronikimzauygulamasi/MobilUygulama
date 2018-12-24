import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
   public items:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  

    this.items = [

      {
         title:"Mobil uygulama Gelistirme",
         hoca:"Ugur Yildiz - 1044",
         
      },
      {
        title:"Teknik İngilizce",
        hoca:"Hakan Gurel - 1040",
      
     },
    {
      title:"Elektrik Elektronik Devreler",
      hoca:"Adnan Sondas - 1040",
      
    },
    {
      title:"Elektrik Elektronik Devreler Laboratuvari",
      hoca:"Adnan Sondas - Z025",
      
      
    },

    {
      title:"Veri Yapilari",
      hoca:"Mehmet Yildirim - 1040",
      

   },
   {
    title:"Veri Yapilari Laboratuvari",
    hoca:"Mehmet Yildirim - Z023",
    
 },
 {
  title:"Diferansiyel Denklemler",
  hoca:"Ilim Kisi - 1040",
  
},
{
  title:"Istatistik Olasilik",
  hoca:"Halil Yigit - 1040",
  
},
    
  
    ];
    
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
