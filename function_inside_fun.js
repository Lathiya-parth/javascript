//function inside function
function app(){
    const muFunc = () =>{
        console.log("hello my fumc");
    }

    const TWoadd = (num1,num2) => {
        return num1 + num2;
    }

    const mul = (num1,num2) => num1*num2;
    console.log("inside app");
    muFunc();
    console.log(TWoadd(3,4));
    console.log(mul(1,2));
}
app();