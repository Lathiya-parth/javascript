const user1={
    firstName:"parth",
    age:19,
    about:function(){
        console.log(this.firstName,this.age);
    }
}

//don't do this mistack

//user1.about();
const myfunc = user1.about.bind(user1);
myfunc();