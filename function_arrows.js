const singHappyBirthday=() => 
    console.log("happy birthday .... ");

singHappyBirthday();

//
const sumThreeNumber= (number1,number2,number3) =>
     number1 + number2 + number3;

console.log(sumThreeNumber(2,6,5));
//
const isEven= number => number%2==0
      
console.log(isEven(5));
//

const  firstChar=anyString =>
    anyString[0];

console.log(firstChar('abc'));

//
const findTarget=(array,target) =>{
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