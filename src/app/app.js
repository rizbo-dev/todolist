import { ToDoClass } from "./ToDoClass"
import { showTodoItem } from "./utils/domGeneratorUtil";
import  {addToLocalStorage, getFilteredTodosFromLocalStorage, getTodosFromLocalStorage} from "./utils/localStorageUtil";


export const run = () => {
     window.addEventListener('DOMContentLoaded', () => {
        const allTodos = getTodosFromLocalStorage();
        allTodos.map((todo) => {
            showTodoItem(todo);
        })
     })
    document.querySelector('#newTodoButton')
    .addEventListener('click', () => {
        let todoName = document.querySelector('#inputValue').value.trim();
        if (todoName !== '') {
            let tdc = new ToDoClass(todoName);
            addToLocalStorage(tdc);
            tdc.showTodo();
        }
    });
    document.querySelector('select')
    .addEventListener('change', () => {
        console.log('cao');
        document.querySelector('.items').innerHTML = '';
        const filteredTodos = getFilteredTodosFromLocalStorage();
        filteredTodos.map((todo) => {
            showTodoItem(todo);
        })
    });
}