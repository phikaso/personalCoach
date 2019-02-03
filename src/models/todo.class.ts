import { ITodo } from "./todo.interface";

export class Todo implements ITodo{
    TodoID: number;
    Title: string;
    Description: string;
    Prio?: number;
    Deadline? : Date;
    Icon: string;
}