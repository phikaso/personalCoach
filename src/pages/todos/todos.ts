import { TodoInsertPage } from './../todo-insert/todo-insert';
import { TodosProvider } from './../../providers/todos/todos-service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ITodo } from '../../models/todo.interface';
import { TodoDetailPage } from '../todo-detail/todo-detail';

@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html'
})

export class TodosPage {
  selectedTodo: ITodo;
  icons: string[];
  todos: Array<ITodo>;

  constructor(private navCtrl: NavController, private navParams: NavParams, private todoService: TodosProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedTodo = navParams.get('item');

    // Let's populate this page with some filler content for funzies

  }

  ionViewWillEnter() {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe(todos=>{console.log(todos);});
    this.todoService.getTodos().subscribe(todos => this.todos = todos);    
  }

  navigateToInsertTodo(event): void{
    this.navCtrl.push(TodoInsertPage);
  }

  navigateToDetailTodo(event, todo: ITodo) : void{
    this.navCtrl.push(TodoDetailPage, {
      todoID: ""+ todo.TodoID
    });
  }
}
