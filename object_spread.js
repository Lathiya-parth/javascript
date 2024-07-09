//spread operator in objects
const obj1 ={
    key1:"value1",
    key2:"value2",
};

const obj2 = {
    key1:"valueunique",
    key3:"value3",
    key4:"value4",
};

// const Newobject = {...obj2, ...obj1};
const Newobject = {...["iteam1","iteam2"]}; 
console.log(Newobject);
