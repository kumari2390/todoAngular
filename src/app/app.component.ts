import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';
  todoList = [];
  todoItem = '';

  addItem(){
    this.todoList.push(this.todoItem);
  }

  deleteItem(index){
    this.todoList.splice(index, 1)
  }
}
