import { ITodo } from './../../models/todo.interface';
import { DashboardItem } from '../../models/dashboardItem.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operator/map';
import { Todo } from '../../models/todo.class';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TodosProvider {

  constructor(private http: HttpClient) {
    console.log('Hello TodosProvider Provider');
  }

  private todoUrlOld = 'api/todos';  // URL to web api
  private baseUrl = 'http://localhost/personalCoachBackend';
  todos: ITodo[];

  getTodos(): Observable<ITodo[]> {
    //this.messageService.add('HeroService: fetched heroes');
    // return this.http.get(this.todoUrl).then(function(response){
    //   console.log(response);
    // })
    return this.http.get<ITodo[]>(this.baseUrl + '/todo.php').pipe(catchError(this.handleError('getTodos', [])));
  }

  insertTodo(todo: ITodo): Observable<ITodo>{
    //return this.http.get<ITodo[]>(this.baseUrl + '/todo.php').pipe(catchError(this.handleError('getTodos', [])));
    return this.http.post<ITodo>(this.baseUrl + '/todo.php', todo , httpOptions);//.pipe(catchError(this.handleError('addTodo', todo)));
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
