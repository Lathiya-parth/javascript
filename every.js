// const numbers = [2,4,6,9,10];

// const ans = numbers.every((Number)=>Number%2===0);
// console.log(ans);

const userCart = [
    {productId: 1, productName:"p1", price:12000},
    {productId: 2, productName:"p2", price:22000},
    {productId: 3, productName:"p3", price:15000},
    
]
const ans = userCart.every((carItem)=> carItem.price<30000);
console.log(ans);

