import { v4 as uuidv4} from 'uuid';
import {showTodoItem} from './utils/domGeneratorUtil';
import {getTodosFromLocalStorage , addToLocalStorage, removeTodoFromLocalStorage} from './utils/localStorageUtil';
export class ToDoClass{
    constructor(todoName) {
      this.id = uuidv4();
      this.name = todoName;
      this.completed = false;
    }
    showTodo() {
        showTodoItem(this);

    }
}