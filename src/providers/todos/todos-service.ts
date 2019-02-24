import { ITodo } from './../../models/todo.interface';
import { DashboardItem } from '../../models/dashboardItem.interface';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, first } from 'rxjs/operators';
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

  editTodo(todo: ITodo): Observable<ITodo>{
    return this.http.put<ITodo>(this.baseUrl + '/todo.php', todo , httpOptions);
  }

  getTodo(todoID: string): Observable<Todo> {
    let params = new HttpParams().set("TodoID", todoID); //Create new HttpParams
    return this.http.get<Todo>(this.baseUrl + '/todo.php', {params});//.map(this.extractData).mergeMap(processArray => { return processArray.filter(x=> todo === "")}).first();//.pipe(catchError(this.handleError('getTodo', [])));
  }

  deleteTodo(todoID: string): Observable<Todo>{
    let params = new HttpParams().set("TodoID", todoID);
    return this.http.delete<Todo>(this.baseUrl + '/todo.php', {params});
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
