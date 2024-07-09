// static list vs live list

// querySelectorAll hamein static list degi
// getElementsBysomthing hamein live list degi

// const listItem = document.querySelectorAll(".todo-list li");
// const sixthLi = document.createElement("li");
// sixthLi.textContent = "item 6";
// const ul = document.querySelector(".todo-list");
// ul.append(sixthLi);
// console.log(listItem);



const ul = document.querySelector(".todo-list");
const listItem = ul.getElementsByTagName("li");

const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";

ul.append(sixthLi);
console.log(listItem);