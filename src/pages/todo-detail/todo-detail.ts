import { TodosProvider } from './../../providers/todos/todos-service';
import { Component, Input, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Todo } from '../../models/todo.class';
import { ITodo } from '../../models/todo.interface';
import {DatePipe} from '@angular/common'

@IonicPage()
@Component({
  selector: 'page-todo-detail',
  templateUrl: 'todo-detail.html',
})
export class TodoDetailPage implements OnInit{

  todoID: string;
  @Input() todo = new Todo();
  Itodo: ITodo;
  date: string;

  constructor(private  navCtrl: NavController, private navParams: NavParams, private todoService: TodosProvider, private datepipe: DatePipe) {
    this.todoID = this.navParams.get("todoID");
  }

  ngOnInit(): void {
    this.todoService.getTodo(this.todoID).subscribe(todo => {
      this.todo = todo[0];
      if(this.todo.Deadline == null){
        this.date = this.datepipe.transform(this.todo.Deadline, 'yyyy-MM-ddTHH:mm');
      }
      
    });
  }

  editTodo(todo: Todo){
    if(this.date){
      this.todo.Deadline = new Date(this.date);
      let userTimezoneOffset = this.todo.Deadline.getTimezoneOffset() * 60000;
      this.todo.Deadline = new Date(this.todo.Deadline.getTime() - userTimezoneOffset)
    }
    this.todoService.editTodo(todo).subscribe(r=>{});
    this.navCtrl.pop();
  }

  deleteTodo(){
    this.todoService.deleteTodo(this.todoID).subscribe(r=>{});
    this.navCtrl.pop();
  }


}
