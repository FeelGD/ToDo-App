import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos = [];
  newTodoName = '';
  errorMessage = '';

  addTodo() {
    if (!this.newTodoName) {
      this.errorMessage = 'Todo name is required.';
    } else {
      this.errorMessage = '';
      this.todos.push({ name: this.newTodoName });
      this.newTodoName = '';
    }
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}