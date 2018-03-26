import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';
import { CalendarModule } from "ion2-calendar";
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';

import {ActivityService} from "../services/activity-service";
import {TripService} from "../services/trip-service";
import {WeatherProvider} from "../services/weather";

import {MyApp} from "./app.component";

import {SettingsPage} from "../pages/settings/settings";
import {CheckoutTripPage} from "../pages/checkout-trip/checkout-trip";
import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
import {NotificationsPage} from "../pages/notifications/notifications";
import {RegisterPage} from "../pages/register/register";
import {SearchLocationPage} from "../pages/search-location/search-location";
import {TripDetailPage} from "../pages/trip-detail/trip-detail";
import {TripsPage} from "../pages/trips/trips";
import {LocalWeatherPage} from "../pages/local-weather/local-weather";
import { DataProvider } from '../providers/data/data';
import { AboutPage } from "../pages/about/about";
import { AlignmentPage } from "../pages/alignment/alignment";
import { AttendancePage } from "../pages/attendance/attendance";
import { AvaliationPage } from "../pages/avaliation/avaliation";
import { SchedulingPage } from "../pages/scheduling/scheduling";
import { ConsumptionPage } from "../pages/consumption/consumption";
import { EmergencyPage } from "../pages/emergency/emergency";
import { FidelityPage } from "../pages/fidelity/fidelity";
import { MaintenancePage } from "../pages/maintenance/maintenance";
import { OilchangePage } from "../pages/oilchange/oilchange";
import { ReviewPage } from "../pages/review/review";

// import services
// end import services
// end import services

// import pages
// end import pages

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    NotificationsPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    TripsPage,
    AboutPage,
    AlignmentPage,
    AttendancePage,
    AvaliationPage,
    SchedulingPage,
    ConsumptionPage,
    EmergencyPage,
    FidelityPage,
    MaintenancePage,
    OilchangePage,
    ReviewPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CalendarModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: '__ionic3_start_theme',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    NotificationsPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    TripsPage,
    AboutPage,
    AlignmentPage,
    AttendancePage,
    AvaliationPage,
    SchedulingPage,
    ConsumptionPage,
    EmergencyPage,
    FidelityPage,
    MaintenancePage,
    OilchangePage,
    ReviewPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    ActivityService,
    TripService,
    WeatherProvider,
    DataProvider
  ]
})

export class AppModule {
}
