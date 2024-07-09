const allButtons = document.querySelectorAll(".my-buttons button");

allButtons.forEach(function(button){
    button.addEventListener("click",(e)=>{
        console.log(e.currentTarget);
    });

});