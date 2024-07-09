function myFunction(power){
    return function(number){
        return number ** power;
    }
}

const squre = myFunction(2);
const ans = squre(3);
console.log(ans);