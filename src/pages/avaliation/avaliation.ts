import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { NotificationsPage } from '../notifications/notifications';

@IonicPage()
@Component({
  selector: 'page-avaliation',
  templateUrl: 'avaliation.html',
})
export class AvaliationPage {

  onChange($event) {
    console.log($event);
  }
  constructor(
                private storage: Storage,
                public nav: NavController,
                public popoverCtrl: PopoverController) {}

  ionViewWillEnter() {}

  goToAccount() {
    this.nav.push(SettingsPage);
  }

  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }

}
