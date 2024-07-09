function func(){
    let counter = 0;
    return function(){
        if(counter < 1){
            console.log("hi you called me !");
            counter++;
        }
        else{
            console.log("me ak bar call ho suka hoon !");
        }
    }
}
const Myfunc = func();
Myfunc();
Myfunc();