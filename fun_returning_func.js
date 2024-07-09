//function returning function
 function myFun(){
    function hello(){
        return "hello world";
    }
    return hello
 }
 const ans = myFun()
 console.log(ans());