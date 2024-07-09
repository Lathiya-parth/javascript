function CreateUser(firstName,lastName,email,age,address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUser.prototype.about=function(){
            return `${this.firstName} is ${this.age} years old,`;
        };
CreateUser.prototype.is18 = function(){
            return this.age >= 18;
        }
CreateUser.prototype.sing= function(){
            return 'too na na na la la';
        }
    

const user1 = new CreateUser('parth','lathiya','parthlathiya1401gmail.com',19,'surat');
const user2 = new CreateUser('prince','lathiya','parthlathiya1401gmail.com',19,'surat');
const user3 = new CreateUser('raj','lathiya','parthlathiya1401gmail.com',19,'surat');
console.log(user1);
console.log(user1.is18());