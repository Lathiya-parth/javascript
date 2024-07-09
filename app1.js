const myInput =  document.querySelector(".input-event");
const btn = document.querySelector(".btn");
function findSuggestion(e){
    console.log(e.target.value);
}

function debounce(func,delay){
     let setTimeoutId;
     return function(...args){
            clearTimeout(setTimeoutId);
       
        setTimeoutId = setTimeout(()=>{
            func.call(this,...args);
        },delay);
     };
}
function leadingDebounce(func,delay){
    let timeoutId = null;
    return function(...args){
        if(timeoutId === null){
            func.call(this, ...args);
        }
        clearTimeout(timeoutId);
        timeoutId = setTimeout(()=>{
            timeoutId = null;
        }, delay);
    };
}

// trailing + leading;
function pdebounce(func,delay,option = {leading:false , trailing:true}){
    let timeoutId = null;
    return function(...args){
        let isInvocked= false;
        if(timeoutId === null && option.leading){
            func.call(this, ...args);
            isInvocked = true;
        }
        clearTimeout(timeoutId);
        timeoutId = setTimeout(()=>{
            if(option.trailing && !isInvocked){
                func.call(this, ...args);
            }
            timeoutId = null;
        }, delay);
    };
}

//keyup
//input
//change
// const decoratedFindSuggestion = debounce(findSuggestion,300);
function clickMe(){
    console.log("Add to cart");
}
// myInput.addEventListener("input", decoratedFindSuggestion)
// btn.addEventListener("click",leadingDebounce(clickMe,300))
btn.addEventListener("click",pdebounce(clickMe, 300, (option = {leading:true,trailing:true})))
 