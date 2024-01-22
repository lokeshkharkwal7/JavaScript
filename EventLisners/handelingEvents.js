console.log('Changing backgroun of the project')
const buttons = document.querySelectorAll('.bt-class')
const text = document.querySelector('.txt')
console.log(text)
function returnrandom(){
    let red = Math.floor(Math.random(0)*255)
    let blue = Math.floor(Math.random(0)*255)
    let green = Math.floor(Math.random(0)*255)
    return `rgb(${red},${green},${blue})`

}
// console.log(buttons.length)
buttons.forEach(button =>{
    button.addEventListener('click',(e)=>{
       e.currentTarget.style.backgroundColor = returnrandom()
       document.body.style.backgroundColor = returnrandom()
       text.textContent = returnrandom()

       console.log(returnrandom())
    })
})

// Using Hovering to change the colour Scheme of a webpage 
buttons.forEach(button =>{
    button.addEventListener('mouseover',(e)=>{
    //    e.currentTarget.style.backgroundColor = returnrandom()
       document.body.style.backgroundColor = returnrandom()
       text.textContent = returnrandom()

       console.log(returnrandom())
    })
})

buttons.forEach(button =>{
    button.addEventListener('mouseleave',(e)=>{
       e.currentTarget.style.backgroundColor = 'rgb(265,265,265)'
       document.body.style.backgroundColor = 'rgb(265,265,265)'
       text.textContent = 'rgb(265,265,265)'

       console.log(returnrandom())
    })
})

// working with the keypress 
buttons.forEach(button =>{
    button.addEventListener('keypress', (e)=>{
        console.log(e.key)
    })
})


  