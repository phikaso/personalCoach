import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TodosPage } from '../pages/todos/todos';
import { TodoInsertPage } from '../pages/todo-insert/todo-insert';
import { DatePipe } from '@angular/common'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DashboardProvider } from '../providers/dashboard/dashboardService';
import { InMemoryDataService } from '../providers/in-memory-data-service/in-memory-data-service';
import { HttpClientModule } from '@angular/common/http';
import { TodosProvider } from '../providers/todos/todos-service';
import { TodoDetailPage } from '../pages/todo-detail/todo-detail';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TodosPage,
    TodoInsertPage,
    TodoDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
  // and returns simulated server responses.
  // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { 
      dataEncapsulation: false,
      //damit werden alle URLS, die nicht im MemoryDataSerivce sind weitergeleitet
      passThruUnknownUrl: true 
    }
)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TodosPage,
    TodoInsertPage,
    TodoDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DashboardProvider,
    InMemoryDataService,
    TodosProvider,
    DatePipe
  ]
})
export class AppModule {}
