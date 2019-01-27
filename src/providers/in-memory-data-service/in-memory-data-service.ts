import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Todo } from '../../models/todo.interface';

@Injectable()
export class InMemoryDataService implements InMemoryDbService{

  // constructor() {
  //   //console.log('Hello DashboardBackendServiceProvider Provider');
  // }

  icons: string[] = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
  'american-football', 'boat', 'bluetooth', 'build'];

  createTodos(){
    let todos: Array<Object> = [];
    for (let i = 1; i < 11; i++) {
      todos.push({
        title: 'Todo ' + i,
        description: 'This is item #' + i,
        prio: i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
    return todos;
  }

  createDb() {
    const dashboardItems = [
      {title: "Todos", icon: "checkbox-outline", amount: 2, amountDone: 1},
      {title: "Wochenziele", icon: "beer", amount: 5, amountDone: 1},
      {title: "Monatsziele", icon: "book", amountDone: 1},
      {title: "Checklisten", icon: "checkbox-outline", amount: 2}
    ];

    const todos = this.createTodos();

    return {dashboardItems, todos};
  }
  // Overrides the genId method to ensure that a hero always has an id.
  // If the dashboardItems array is empty,
  // the method below returns the initial number (11).
  // if the dashboardItems array is not empty, the method below returns the highest
  // hero id + 1.

  // genId(dashboardItems: DashboardItem[]): number {
  //   return dashboardItems.length > 0 ? Math.max(...dashboardItems.map(hero => hero.id)) + 1 : 11;
  // }

}