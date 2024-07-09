//function myFunc(callback){
//     console.log("function is doing task 1");
//     callback();
// }


// myFunc(()=>{
//     console.log("function is doing task 2");
// })

function getTwoNuberAndAll(number1,number2,onsuccess,onFailure){
 if(typeof number1 === "number"  &&  typeof number2 === "number"){

    onsuccess(number1,number2);
 }
 else{
    onFailure();
 }
}

function AddTwoNumbers(num1,num2){
    console.log(num1+num2);
}

function onFailure(){
    console.log("Wrong data type");
    console.log("please pass number only");
}

getTwoNuberAndAll(4,4,AddTwoNumbers,onFailure);