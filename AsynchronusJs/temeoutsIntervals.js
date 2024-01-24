// // get heading id 
let heading1 = document.querySelector('#heading1')
let heading2 = document.querySelector('#heading2')
let heading3 = document.querySelector('#heading3')
let heading4 = document.querySelector('#heading4')
let heading5 = document.querySelector('#heading5')
let heading6 = document.querySelector('#heading6')
let heading7 = document.querySelector('#heading7')

// // write a code to change the colour 

// // Creating Pyramid of Doom Concept in Java Script 

// function changecolour(heading , color){  
//     heading.style.color = color
// }

// function callbackh(){
//     setTimeout(() => {
//      changecolour(heading1,'blue')
//         setTimeout(() => {
//              changecolour(heading2,'red')
//             setTimeout(() => {
//                  changecolour(heading3,'green')
//                  setTimeout(() => {
//                    changecolour(heading4,'purple')
//                     setTimeout(() => {
//                        changecolour(heading5,'orange')
//                         setTimeout(() => {1000
//                              changecolour(heading6,'pink')
//                              setTimeout(() => {
//                                 changecolour(heading7,'cyan')
//                              }, 1000);                             
//                         }, 1000);                      
//                     }, 1000);                    
//                  }, 1000);                
//             }, 1000);          
//         }, 1000);        
//     }, 1000);
// }
// callbackh() //Functin call 

// Creating a button that will change the background after each seconds 

function getcolour(){
    red = Math.floor(Math.random() *256)
    green = Math.floor(Math.random() *256)
    blue = Math.floor(Math.random() *256)
    return `rgb(${red},${green},${blue})`
}
const id = setInterval(() => {
    document.body.style.backgroundColor = getcolour()
    
}, 1000);
const button = document.querySelector('.bt-class')
button.addEventListener('click', function(){
    colour = document.body.style.backgroundColor
    console.log(colour)
    button.textContent = `Current Colour : ${colour.toUpperCase()}`
    clearInterval(id)
    
})

// Using Chain of promises to fire multiple asynchronous methods on after 
// the other / Solving the problem of Callback hell and Pyramid of Doom 
// concept

function performAction(heading, color , interval){
    return myPromise = new Promise(function(resolve,reject){
        setTimeout(function(){  
                heading.style.color = color
                resolve()
        },interval)
    })}
performAction(heading1,'Red',1000)
        .then(()=>performAction(heading2,'Green',500)) //returning performing action
        .then(()=> performAction(heading3,'Blue',500)
        .then(()=> performAction(heading3,'Yellow',500))
        .then(()=> performAction(heading4,'Violet',500))
        .then(()=> performAction(heading5,'Cyan',500))
        .then(()=> performAction(heading6,'Brown',500))
        .then(()=> performAction(heading7,'Pink',500))
        .catch(()=>alert("Error Occured")))


   




