import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Todo } from '../../models/todo.interface';

@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html'
})

export class TodosPage {
  selectedTodo: any;
  icons: string[];
  todos: Array<Todo>;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedTodo = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.todos = [];
    for (let i = 1; i < 11; i++) {
      this.todos.push({
        title: 'Todo ' + i,
        description: 'This is item #' + i,
        prio: i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(TodosPage, {
      item: item
    });
  }
}
