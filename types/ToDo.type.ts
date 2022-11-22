export interface ToDo {
  id: number;
  toDo: string;
  status: ToDoStatus
}

export enum ToDoStatus {
  NONE = 'NONE',
  DOING = 'DOING',
  DONE = 'DONE',
}