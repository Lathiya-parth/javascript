let winningNumber = 19;
let userGuess = +prompt("guess the number");

if(userGuess === winningNumber){
    console.log("you are win!!!");
}
else{
    if(userGuess < winningNumber){
        console.log("too low!!!");
    }
    else{
        console.log("too high!!!");
    }
}