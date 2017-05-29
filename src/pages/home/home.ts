import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openIt(tops) {
  	tops.open();
  }

  cancel() {
  	console.log('Ngak Jadi...');
  }

}
