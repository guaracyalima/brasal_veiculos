import { Component, ViewChild } from "@angular/core";
import { Platform, Nav } from "ionic-angular";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { LocalWeatherPage } from "../pages/local-weather/local-weather";
import { AboutPage } from "../pages/about/about";
import { AlignmentPage } from "../pages/alignment/alignment";
import { AttendancePage } from "../pages/attendance/attendance";
import { AvaliationPage } from "../pages/avaliation/avaliation";
import { ConsumptionPage } from "../pages/consumption/consumption";
import { EmergencyPage } from "../pages/emergency/emergency";
import { FidelityPage } from "../pages/fidelity/fidelity";
import { MaintenancePage } from "../pages/maintenance/maintenance";
import { OilchangePage } from "../pages/oilchange/oilchange";
import { ReviewPage } from "../pages/review/review";
import { SchedulingPage } from "../pages/scheduling/scheduling";

export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  appMenuItems: Array<MenuItem>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard
  ) {
    this.initializeApp();

    this.appMenuItems = [
      {title: 'Home', component: HomePage, icon: 'home'},
      {title: 'Brasal Veiculos', component: AboutPage, icon: 'partly-sunny'},
      {title: 'Alinhamento & Balanceamento', component: AlignmentPage, icon: 'partly-sunny'},
      {title: 'Atendimento', component: AttendancePage, icon: 'partly-sunny'},
      {title: 'Agilicarro', component: AvaliationPage, icon: 'partly-sunny'},
      {title: 'Agendamentos', component: SchedulingPage, icon: 'partly-sunny'},
      {title: 'Historico de consumo', component: ConsumptionPage, icon: 'partly-sunny'},
      {title: 'Emergencia', component: EmergencyPage, icon: 'partly-sunny'},
      {title: 'Programa de fidelidade', component: FidelityPage, icon: 'partly-sunny'},
      {title: 'Manutenção', component: MaintenancePage, icon: 'partly-sunny'},
      {title: 'Troca de oleo', component: OilchangePage, icon: 'partly-sunny'},
      {title: 'Revisão', component: ReviewPage, icon: 'partly-sunny'},
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.

      //*** Control Splash Screen
      // this.splashScreen.show();
      // this.splashScreen.hide();

      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);

      //*** Control Keyboard
      this.keyboard.disableScroll(true);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.nav.setRoot(LoginPage);
  }

}
