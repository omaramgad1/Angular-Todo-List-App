import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  inputToDoText: string = "";

  data: any = localStorage.getItem('todos');
  toDos: Todo[] = JSON.parse(this.data) || [];

  constructor() { }
  ngOnInit(): void {

  }


  addToDo() {

    if (this.inputToDoText.trim() != '') {
      this.toDos.push(
        {
          id: this.toDos.length ? this.toDos[this.toDos.length - 1].id + 1 : 1,
          title: this.inputToDoText,
          completed: false
        }
      )
      localStorage.setItem('todos', JSON.stringify(this.toDos));

      this.inputToDoText = "";
    }
    else {

      alert("Please Enter Todo");

    }
  }

  deleteToDo(index:number):void {
    this.toDos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.toDos));

  }
  combleteTodo(index: number): void {
    this.toDos[index].completed = !this.toDos[index].completed;
    localStorage.setItem('todos', JSON.stringify(this.toDos));
  }
}
