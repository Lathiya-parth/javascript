// const myArray = ["hello","cat","dog","lion"];
// function isLength3(string){
//     return string.length === 3;
// }
// const ans = myArray.find((string)=>string.length===3)
// console.log(ans);


const users = [
    {userId: 1, firstName: 'parth' },
    {userId: 2, firstName: 'meet'},
    {userId: 3, firstName: 'bhargav'},
    {userId: 4, firstName: 'parth' },
    {userId: 5, firstName: 'meet'},
];

const myUser =users.find((user)=>user.userId===3);
console.log(myUser);