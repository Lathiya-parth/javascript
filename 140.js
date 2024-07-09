//fetch

const URL = "https://jsonplaceholder.typicode.com/postsss";
fetch(URL,{
    method:'post',
    body:JSON.stringify({
        title:'foo',
        body:'bar',
        userId:1,

    }),
    headers:{
        'Content-type': 'application/json; charset=UTF-8',
    },
})
.then(response=>{
    if(response.ok){
        return response.json()
    }
    else{
        throw new Error("somthing went wrong!!!")
    }
})
.then(data=>{
    console.log(data);
})
.catch(error=>{
    console.log("incide catch");
    console.log(error);
})