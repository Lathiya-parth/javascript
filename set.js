//sets( it is iterable)
// store data
//sets also have its own methods
//no index-based access
//order is not guaranteed
//unique items only (no duplicates allowed)

const items = ['item1','item2','item3'];
const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
numbers.add(items);
console.log(numbers);

const myArray = [1,2,4,4,5,6,5,6];
const uniqueElements = new Set(myArray);
console.log(uniqueElements);

let length = 0;
for(let element of uniqueElements){
    length++;
}
console.log(length);