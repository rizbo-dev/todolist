import { getTodosFromLocalStorage, removeTodoFromLocalStorage } from "./localStorageUtil";

export const showTodoItem = (newTodo) => {
    console.log(newTodo);
    const todoDiv = document.createElement('div');
        todoDiv.setAttribute('data-id',newTodo.id);
        todoDiv.classList.add('todo-item');
        const todoName = document.createElement('div');
        
        todoName.classList.add('item-name');
        if (newTodo.completed) {
            todoName.classList.add('item-name-completed');
        }
        todoName.innerText = newTodo.name;
        const todoControl = document.createElement('div');
        todoControl.classList.add('item-control');
        const completeButton = document.createElement('button');
        completeButton.classList.add('btn-completed');
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn-uncompleted');
        completeButton.innerHTML = '<i class="fas fa-check"></i>';
        deleteButton.innerHTML = '<i class="fas fa-times"></i>';
        //buttons listeners
        completeButton.addEventListener('click', () => {
            if (newTodo.completed) {
                newTodo.completed = false;
                todoName.classList.remove('item-name-completed');
            }
            else {
                newTodo.completed = true;
                todoName.classList.add('item-name-completed');
            }
            let todosFromLocal = getTodosFromLocalStorage();
                todosFromLocal.forEach((todo) => {
                    if (todo.id === newTodo.id) {
                        todo.completed = newTodo.completed;
                    }
                });
                localStorage.removeItem('todos');
                localStorage.setItem("todos", JSON.stringify(todosFromLocal));
              
        });

        deleteButton.addEventListener('click', () => {
            let indexToBeRemoved;
            let todosFromLocal = getTodosFromLocalStorage();
                todosFromLocal.forEach((todo,index) => {
                    if (todo.id === newTodo.id) {
                        indexToBeRemoved = index;
                    }
                });
                removeTodoFromLocalStorage(indexToBeRemoved);
                todoDiv.classList.add("removeTodo");
                setTimeout(() => {
                    todoDiv.remove();
                },1000);

                // todoDiv.addEventListener('transitionend', (e) => {
                //     todoDiv.remove();
                // })
        });

        //append
        todoControl.appendChild(completeButton);
        todoControl.appendChild(deleteButton);
        todoDiv.appendChild(todoName);
        todoDiv.appendChild(todoControl);
        document.querySelector('.items').appendChild(todoDiv);
}

const removeTodoFromList = (todo) => {
    document.querySelector('.items')
    .removeChild(todo);
};