import { TodosProvider } from './../../providers/todos/todos-service';
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

  constructor(private navCtrl: NavController, private navParams: NavParams, private todoService: TodosProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedTodo = navParams.get('item');

    // Let's populate this page with some filler content for funzies

  }

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe((res)=>{console.log(res);});
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
    
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(TodosPage, {
      item: item
    });
  }
}
