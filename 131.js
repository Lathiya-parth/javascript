//callback , callback hell , pyramid of doom
//asynchronous programming

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");

//callback hell
// setTimeout(()=>{
//     heading1.textContent = "one";
//     heading1.style.color = "violet";
//     setTimeout(()=>{
//         heading2.textContent = " Two";
//         heading2.style.color = "red";
//     },2000)
//     setTimeout(()=>{
//         heading3.textContent = "Three";
//         heading3.style.color = "purple";
//     },1000)
//     setTimeout(()=>{
//         heading4.textContent = "Four";
//         heading4.style.color = "pink";
//     },1000)
//     setTimeout(()=>{
//         heading5.textContent = "Five";
//         heading5.style.color = "blue";
//     },2000)
//     setTimeout(()=>{
//         heading6.textContent = "Six";
//         heading6.style.color = "brown";
//     },3000)
//     setTimeout(()=>{
//         heading7.textContent = "Seven";
//         heading7.style.color = "green";
//     },1000)
// },1000);

function changeText(element,text, color , time ,onsucessCallback,onFailercallback){
    setTimeout(()=>{
        if(element){
            element.textContent = text;
            element.style.color = color;
            if(onsucessCallback){
                onsucessCallback();
            }
            else{
                if(onFailercallback){
                    onFailercallback();
                }
            }
        }
    },time)
}

//pyramid of doom
changeText(heading1,"one","green",1000,()=>{
    changeText(heading2,"Two","red",2000,()=>{
        changeText(heading3,"Three","violet",1000,()=>{
            changeText(heading4,"four","pink",1000,()=>{
                changeText(heading5,"five","purple",1000,()=>{
                    changeText(heading6,"six","yellow",1000,()=>{
                        changeText(heading7,"seven","blue",1000,()=>{
                            changeText(heading8,"eight","cyan",1000,()=>{
                                changeText(heading9,"nine","#cda562",1000,()=>{
                                    changeText(heading10,"ten","dca652",1000,()=>{

                                    },()=>{console.log("Heading10 does not exit")})
                                },()=>{console.log("Heading9 does not exit")})
                            },()=>{console.log("Heading8 does not exit")})
                        },()=>{console.log("Heading7 does not exit")})
                   },()=>{console.log("Heading6 does not exit")})
                },()=>{console.log("Heading5 does not exit")})
            },()=>{console.log("Heading4 does not exit")})
        },()=>{console.log("Heading3 does not exit")})
    },()=>{console.log("Heading2 does not exit")})
},()=>{console.log("Heading1 does not exit")})

