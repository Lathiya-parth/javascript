const myVar = "value1";

function myApp(){
    function myFunc(){
        //const myVar = "value59";
        const myfunc2 = () => {
            console.log("inside myfunc",myVar);
        }
        myfunc2();
    }
    console.log(myVar);
    myFunc();
}
myApp();