//loop
// let navItems = document.getElementsByTagName("a");    //HTMLCollection
// console.log(navItems);

//we can't use foreach method to iterate through HTMLCollection
//simple for loop 
//for of loop
//forEach


// for(let i=0; i<navItems.length; i++){
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }


// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// navItems = Array.from(navItems);
// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })

let navItems = document.querySelectorAll("a"); 
navItems = Array.from(navItems);
console.log(Array.isArray(navItems));
// for(let i=0; i<navItems.length; i++){
//         const navItem = navItems[i];
//         navItem.style.backgroundColor = "#fff";
//         navItem.style.color = "green";
//         navItem.style.fontWeight = "bold";
//     }
    
// for(let navItem of navItems){
//         navItem.style.backgroundColor = "#fff";
//         navItem.style.color = "green";
//         navItem.style.fontWeight = "bold";
//     }

// navItems = Array.from(navItems);
// navItems.forEach((navItem)=>{
//         navItem.style.backgroundColor = "#fff";
//         navItem.style.color = "green";
//         navItem.style.fontWeight = "bold";
//     })
    

// console.log(navItems);

// const navItems = document.querySelectorAll(".nav-item");     //nodelist
// console.log(navItems[1]);