import { ITodo } from './../../models/todo.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Todo } from '../../models/todo.class';
import { TodosProvider } from '../../providers/todos/todos-service';

/**
 * Generated class for the TodoInsertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todo-insert',
  templateUrl: 'todo-insert.html',
})
export class TodoInsertPage {

  todo: Todo;

  constructor(private navCtrl: NavController, private navParams: NavParams, private todoService: TodosProvider) {
    this.todo = new Todo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodoInsertPage');
  }

  insertTodo(todo: Todo){
    console.log(todo);
    this.todoService.insertTodo(todo).subscribe(r=>{});;
  }

}
