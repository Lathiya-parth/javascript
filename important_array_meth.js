//important array methode 

const numbers = [4,2,5,8];

function myFunc(number,index){
    console.log(`index is ${index} number is ${number}`);
}

// for(let i = 0; i<numbers.length;i++){
//     myFunc(numbers[i],i)
// }


// numbers.forEach(function(number,index){
//     console.log(`index is ${index} number is ${number}`)
// });

// numbers.forEach(function(number,index){
//     console.log(number*3,index);
// })

const users = [
    {firstName: "parth", age: 19},
    {firstName: "prince", age: 21},
    {firstName: "ravi", age: 19},
    {firstName: "rushit", age: 22},
]

// users.forEach(function(user){
//     console.log(user.firstName);
// });

users.forEach((user,index)=>{
    console.log(user.firstName,index);
})