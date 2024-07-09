// appendchild;
// insertbefore;
// replacechild;
// removechild;


// const ul =document.querySelector(".todo-list");
// const  li = document.createElement("li");
// li.textContent = "new todo";
// ul.appendChild(li);


// const ul =document.querySelector(".todo-list");
// const  li = document.createElement("li");
// const referenceNode =document.querySelector(".first-todo");
// li.textContent = "new todo";
// ul.insertBefore(li,referenceNode);

// const ul =document.querySelector(".todo-list");
// //new child 
// const  li = document.createElement("li");
// li.textContent = "new todo";

// const referenceNode =document.querySelector(".first-todo");
// ul.replaceChild(li,referenceNode);

const ul =document.querySelector(".todo-list"); 
const  li = document.createElement("li");
li.textContent = "new todo";
const referenceNode =document.querySelector(".first-todo");
ul.removeChild(referenceNode);