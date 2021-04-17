export const addToLocalStorage = (todo) => {
    let todos;
   if (localStorage.getItem("todos") === null) {
        todos = [];
   } 
   else {
       todos = JSON.parse(localStorage.getItem("todos"));
   }
   todos.push(todo);
   localStorage.setItem("todos", JSON.stringify(todos));
} 

export const getTodosFromLocalStorage = (todo) => {
    let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
}

export const removeTodoFromLocalStorage = (index) => {
    let todos = getTodosFromLocalStorage();
    todos.splice(index,1);
    localStorage.removeItem('todos');
    localStorage.setItem("todos", JSON.stringify(todos));
}

export const getFilteredTodosFromLocalStorage = () => {
    let filterValue = document.querySelector('select').value;
    const allTodos = getTodosFromLocalStorage();
    if (filterValue === "All") {
        return allTodos;
    }
    else if (filterValue === "Uncompleted") {
        const filteredTodos = allTodos.filter((todo) => !todo.completed);
        return filteredTodos;
    }
    else {
        const filteredTodos = allTodos.filter((todo) => todo.completed);
        return filteredTodos;
    }
};