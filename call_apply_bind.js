function about(hobby,favmusicion){
    console.log(this.firstName,this.age,hobby,favmusicion);
}
 const user1={
    firstName:"parth",
    age:19
 }
 const user2={
    firstName:"prince",
    age:21
 }

 //call
//  about.call(user2,"guitar","bach");
//apply
//  about.apply(user2,["guitar","bach"]);
//bind
const func = about.bind(user2,"guitar","bach");
func();  