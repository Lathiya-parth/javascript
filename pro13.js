// document.createElement()
//append
//prepend
//remove
// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");
// // todoList.append(newTodoItem);         //pasi  add kare
// todoList.prepend(newTodoItem);
// console.log(newTodoItem);

//remove

// const todo1=document.querySelector(".todo-list li");
// todo1.remove();
// console.log(todo1);


//before 
//after

const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Teach students";
const todoList = document.querySelector(".todo-list");
todoList.after(newTodoItem);


