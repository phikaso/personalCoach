import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TodosPage } from '../pages/todos/todos';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DashboardProvider } from '../providers/dashboard/dashboardService';
import { InMemoryDataService } from '../providers/in-memory-data-service/in-memory-data-service';
import { HttpClientModule } from '@angular/common/http';
import { TodosProvider } from '../providers/todos/todos-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TodosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
  // and returns simulated server responses.
  // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }
)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TodosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DashboardProvider,
    InMemoryDataService,
    TodosProvider
  ]
})
export class AppModule {}
