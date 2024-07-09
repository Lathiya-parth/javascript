function createUser(firstName,age){
    this.firstName = firstName;
    this.age = age;
}

createUser.prototype.about =function(){
    console.log(this.firstName,this.age);
}

const user1 = new createUser("parth",19);

//new keyword 
//1.) emptyn object this = {}
//2.) return this

user1.about();