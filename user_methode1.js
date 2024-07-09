const userMethods = {
    about:function(){
        return `${this.firstName} is ${this.age} years old,`;
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing: function(){
        return 'too na na na la la'
    }

}

function createUser(firstName,lastName,email,age,address){
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

const user1 = createUser('parth','lathiya','parthlathiya1401gmail.com',19,'surat');
const user2 = createUser('prince','lathiya','parthlathiya1401gmail.com',19,'surat');
const user3 = createUser('raj','lathiya','parthlathiya1401gmail.com',19,'surat');
console.log(user1);
console.log(user1.about());
// console.log(user3.about());