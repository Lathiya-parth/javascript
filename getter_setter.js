//getter and setters
class person{
    constructor(firstName, lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
            return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        const [firstName,lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new person("parth","lathiya",19);
person1.fullName = "mayur lathiya";
console.log(person1);