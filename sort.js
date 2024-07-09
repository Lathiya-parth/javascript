const numbers = [5,9,1200,410,3000];
numbers.sort((a,b)=>{
    return a-b;
});
//numbers.sort((a,b)=>a-b);
console.log(numbers);

// 1200,410
// a-b ---> 790
//a-b --->postive(greater than 0) --->b,a
//410,1200

//a-b ---> negative ---> a,b
//5,9 ---> -4

//price lowTohigh  highTolow
const products = [
    {productId: 1, productName:"p1", price:300},
    {productId: 2, productName:"p2", price:3000},
    {productId: 3, productName:"p3", price:2000},
    {productId: 4, productName:"p4", price:8000},
    {productId: 5, productName:"p5", price:500},    
]

//lowTohigh
const lowToHigh = products.slice(0). sort((a,b) =>{
    return a.price - b.price;
});
console.log(lowToHigh);

//highToLow
const highToLow = products.slice(0). sort((a,b) =>{
    return  b.price - a.price;
});
console.log(highToLow);
