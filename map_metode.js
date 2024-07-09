const numbers = [3,4,5,6];

// const square = function(number){
//     return number*number;
// }

// const squareNamber = numbers.map((number, index)=>{
//     return index;
// });
// console.log(squareNamber);


const users = [
    {firstName: "parth", age: 19},
    {firstName: "prince", age: 21},
    {firstName: "ravi", age: 19},
    {firstName: "rushit", age: 22},
]

const userNames = users.map((user)=>{
    return user.firstName;
});

console.log(userNames);