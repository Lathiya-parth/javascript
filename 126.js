console.log("hello world");

const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child =  document.querySelector(".child");

//capturing
// child.addEventListener("click",()=>{
//     console.log("capturing!!! child");
// },true);
// parent.addEventListener("click",()=>{
//     console.log("capturing!!! parent");
// },true);
// grandparent.addEventListener("click",()=>{
//     console.log("capturing!!! grandparent");
// },true);
// document.body.addEventListener("click",()=>{
//     console.log("capturing!!! document.body");
// },true); 


// child.addEventListener("click",()=>{
//     console.log("bubble child");
// });
// parent.addEventListener("click",()=>{
//     console.log("bubble parent");
// });
// grandparent.addEventListener("click",()=>{
//     console.log("bubble grandparent");
// });
// document.body.addEventListener("click",()=>{
//     console.log("bubble document.body");
// });


//event delegation
grandparent.addEventListener("click",(e)=>{
    console.log(e.target);
})