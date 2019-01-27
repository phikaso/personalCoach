import { DashboardItem } from './../../models/dashboardItem.interface';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DashboardProvider } from '../../providers/dashboard/dashboardService';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  user: string = "Philipp";
  dashboardItems: DashboardItem[];

  constructor(private navCtrl: NavController, private dashboardService: DashboardProvider) {

  }

  ngOnInit() {
    this.getDashboardItems();
  }

  getDashboardItems(): void {
    this.dashboardService.getDashboardItems().subscribe(dashboardItems => this.dashboardItems = dashboardItems);
  }

}
