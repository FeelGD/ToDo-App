import { Injectable } from '@angular/core';
import { Todo } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  private nextId = 1;

  getTodos() {
    return this.todos;
  }

  addTodo(name: string) {
    if (name) {
      this.todos.push({ id: this.nextId++, name });
    }
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
