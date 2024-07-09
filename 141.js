//awit

console.log("script start");
const URL = "https://jsonplaceholder.typicode.com/posts";

// async function getposts(){
//     const response = await fetch(URL);
//     if(!response.ok){
//         throw new error("somthing went wrong")
//     }
//     const data = await response.json();
//     return data;
// }


const getposts = async()=>{
    const response = await fetch(URL);
    if(!response.ok){
        throw new error("somthing went wrong")
    }
    const data = await response.json();
    return data;
}

// const myData = getposts();
// console.log(myData);


getposts()
.then((myData)=>{
    console.log(myData);
})
.catch(error=>{
    console.log("incide catch");
    console.log(error);
})
console.log("script end");