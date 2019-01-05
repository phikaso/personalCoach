import { DashboardItem } from './../../models/dashboardItem.interface';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: string = "Philipp";
  dashboardItems: DashboardItem[] = [
    {title: "Todos", icon: "checkbox-outline", amount: 2, amountDone: 1},
    {title: "Wochenziele", icon: "beer", amount: 5, amountDone: 1},
    {title: "Monatsziele", icon: "book", amountDone: 1},
    {title: "Checklisten", icon: "checkbox-outline", amount: 2}
  ];

  constructor(private navCtrl: NavController) {

  }

}
