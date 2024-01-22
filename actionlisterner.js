// const button_element = document.querySelector('.bt-class')
// console.log(button_element)
// function helloworld(){
//     console.log('Hello Event Listner')
// }
// button_element.addEventListener('click',helloworld())

// // For multiple buttong selection 
// const buttons = document.querySelectorAll('.bt-class')
// console.log(buttons)
// for (let button of buttons){
//     button.addEventListener('click', function(){
//         console.dir(this.textContent)
//     }) 
// }
// console.log(buttons)

// // Working with the nodelist of buttons using foreach loop
// buttons.forEach(button => {
//     button.addEventListener('click',function(){
//         console.log(this.textContent)
//     }) })

// // Working with the event object 
// // printing event object which will be inside browder API

// console.log('EVENT OBJECT')

// let buTtons = document.querySelector('#button1')
// console.log(buTtons)

// buTtons.addEventListener('click',function(e){
//     console.log(e,'here is the value')
// })

// // Using event object with the arrow functions 
// // event parameter will be provided by the web API 
// let button1s = document.querySelectorAll('.bt-class')
// for(let b of button1s){
//     b.addEventListener('click',(event)=>{
//         console.log(event.currentTarget.textContent)
//     })}

// Working of a button that will change the background to yellow

console.log('lets change the colour of the buttons')
const buttons = document.querySelectorAll('.bt-class')
// console.log(buttons.length)
buttons.forEach(button=>{
       button.addEventListener('click',(e)=>{
        console.log(e.currentTarget.style.backgroundColor = 'Yellow')
        e.currentTarget.style.color = 'Red'
       })
})



