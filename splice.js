//splice method
// start ,delete,insert

const myArray = ['item1','item2','item3'];

// const deleteItem = myArray.splice(1,1);
// console.log("delete item",deleteItem);

// myArray.splice(1,0,'insert item');


const deleteItem = myArray.splice(1,2,"insert item1","insert item2");
console.log("delted item",deleteItem);

console.log(myArray);

