export interface ITodo{
    TodoID: number;
    Title: string;
    Description: string;
    Prio?: number;
    Deadline? : Date;
    Icon: string;
}