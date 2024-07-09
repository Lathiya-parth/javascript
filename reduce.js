const numbers = [1,2,3,4,5,10];

// aim: sum of all the numbers in array

// const sum = numbers.reduce((accumulator,currentValue) =>{
//     return accumulator + currentValue;
// });
// console.log(sum);


const userCart = [
    {productId: 1, productName:"mobile", price:12000},
    {productId: 2, productName:"laptop", price:22000},
    {productId: 3, productName:"tv", price:15000},
]

const totalAmount = userCart.reduce((totalprice,currentProduct)=>{
    return totalprice + currentProduct.price;
},0)   // 0 means element starting point



console.log(totalAmount);