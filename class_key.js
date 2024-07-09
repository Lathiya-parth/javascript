class CreateUser{
    constructor(firstName,lastName,email,age,address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    about(){
        return `${this.firstName} is ${this.age} years old,`;
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return 'too na na na la la';
    }
}

const user1 = new CreateUser('parth','lathiya','parthlathiya1401gmail.com',19,'surat');
const user2 = new CreateUser('prince','lathiya','parthlathiya1401gmail.com',19,'surat');
const user3 = new CreateUser('raj','lathiya','parthlathiya1401gmail.com',19,'surat');
console.log(Object.getPrototypeOf(user1));