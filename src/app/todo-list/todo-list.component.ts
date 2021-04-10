import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  title = 'todolist';
  todoList = [];
  todoItem = '';


  constructor() { }

  ngOnInit(){
  }    


  addItem(){
    this.todoList.push(this.todoItem);
  }

  deleteItem(index){
    this.todoList.splice(index, 1)
  }



}
