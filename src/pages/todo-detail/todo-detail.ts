import { TodosProvider } from './../../providers/todos/todos-service';
import { Component, Input, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Todo } from '../../models/todo.class';
import { ITodo } from '../../models/todo.interface';

@IonicPage()
@Component({
  selector: 'page-todo-detail',
  templateUrl: 'todo-detail.html',
})
export class TodoDetailPage implements OnInit{

  todoID: string;
  @Input() todo = new Todo();
  Itodo: ITodo;

  constructor(private  navCtrl: NavController, private navParams: NavParams, private todoService: TodosProvider) {
    this.todoID = this.navParams.get("todoID");
  }

  ngOnInit(): void {
    this.todoService.getTodo(this.todoID).subscribe(todo => {this.todo = todo[0]; console.log(this.todo);});
  }



}
