const todoForm  = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");
// console.log(todoInput);

todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    // console.log(todoInput.value);
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHtml = `<span class="text">${newTodoText}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`
    newLi.innerHTML = newLiInnerHtml;
    todoList.append(newLi);
    todoInput.value="";
})

todoList.addEventListener("click",(e)=>{
    //check if user clicked on done  button 
    if(e.target.classList.contains("remove")){
        // console.log("you want to remove somthing?");
        const targetedLi = e.target.parentNode.parentNode;
        targetedLi.remove();
    }
    if(e.target.classList.contains("done")){
        // console.log("great!!!");
        const lispan = e.target.parentNode.previousElementSibling;
        lispan.style.textDecoration = "line-through";  
    }
})