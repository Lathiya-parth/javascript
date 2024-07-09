const numbers = [3,5,11,9];

// const ans = numbers.some((number)=>number%2===0);
// console.log(ans);
const userCart = [
    {productId: 1, productName:"p1", price:12000},
    {productId: 2, productName:"p2", price:22000},
    {productId: 3, productName:"p3", price:15000},
    {productId: 4, productName:"p4", price:25000},
    
]
const ans = userCart.some((cartItem)=>cartItem.price > 100000);
console.log(ans);