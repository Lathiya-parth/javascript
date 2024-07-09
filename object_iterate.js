//how to iterate object
const person = {
    name: "parth",
    age: 19,
    "person hobbies": ["guitar","sleeping","listening music"]
}

//for in loop
//object.keys
for(let key in person){  
    // console.log(`${key} : ${person[key]}`);
    console.log(key," :",person[key]);
}

console.log(typeof(Object.keys(person)));
const val=Array.isArray(Object.keys(person));
console.log(val);

for(let key of Object.keys(person)){
    console.log(person[key]);
}