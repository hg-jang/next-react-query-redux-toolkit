export interface CreateToDoDto {
  userId: string;
  toDo: string;
}

export interface DeleteToDoDto {
  toDoId: number;
}