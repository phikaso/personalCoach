import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodoInsertPage } from './todo-insert';

@NgModule({
  declarations: [
    TodoInsertPage,
  ],
  imports: [
    IonicPageModule.forChild(TodoInsertPage),
  ],
})
export class TodoInsertPageModule {}
