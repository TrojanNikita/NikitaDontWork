import  {Todo}  from "./";

export interface StoreStructure {
    todos: Todo[];
    maxId: number;
}