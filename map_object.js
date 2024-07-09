const person = new Map();
person.set('firstName','parth');
person.set('age',7);
person.set('1','one');
// person.set('[1,2,3]','onetwothree');
// person.set({1:'one'},'onetwothree');
// console.log(person);
// console.log(person.get(1));
// for(let key of person.keys()){
//     console.log(key,typeof key);
// }

// for(let [key,value] of person){
//     // console.log(Array.isArray(key));
//     console.log(key,value);
// }


// const person = new Map([['firstName','parth'],['age',19]])
// console.log(person);

const person1 ={
    id: 1,
    firstName : "parth"
}


const person2 ={
    id: 2,
    firstName : "bhargav"
}

const extraInfo = new Map();
extraInfo.set(person1,{age:8,gender:"male"});
extraInfo.set(person2,{age:9,gender:"female"});
console.log(extraInfo);
console.log(person1.id);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);