//function declretion
function singHappyBirthday(){
    console.log("happy birthday .... ");
}
singHappyBirthday();

//function expreessison
const sumThreeNumber=function (number1,number2,number3){
    return number1 + number2 + number3;
}
console.log(sumThreeNumber(2,6,5));



function isEven(number){
     if(number%2==0){
        return true;
     }
     else{
        return false;
     }
}
console.log(isEven(5));


function firstChar(anyString){
    return anyString[0];
}
console.log(firstChar('abc'));


function findTarget(array,target){
    for(i=0;i<array.length;i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray= [2,20,3,0,5]
const ans = findTarget(myArray,3);
console.log(ans);