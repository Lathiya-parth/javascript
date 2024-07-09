//object inside array
//very use full in real world application

const users = [
    {usersId:1,firstName:"parth",age:19},
    {usersId:2,firstName:"ravi",age:18},
    {usersId:3,firstName:"raj",age:20},
]
for(let user of users){
     console.log(user.firstName);
}