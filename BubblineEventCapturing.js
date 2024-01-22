
// Case for Bubbling 


document.querySelector('#grandparent').addEventListener('click',(e)=>{
      console.log('clicked on grandparent')

})
document.querySelector('#parent').addEventListener('click',(e)=>{
    console.log('clicked on parent')
})

document.querySelector('#child').addEventListener('click',()=>{
    console.log('clicked on child')
})

// Case for Capturing 

document.querySelector('#grandparent').addEventListener('click',(e)=>{
     console.log('clicked on grandparent')

},true)
document.querySelector('#parent').addEventListener('click',(e)=>{
   console.log('clicked on parent')
},true)


document.querySelector('#child').addEventListener('click',()=>{
   console.log('clicked on child')
},true)

// setting up the true and false values after the function name 
document.querySelector('#grandparent').addEventListener('click',(e)=>{
    console.log('clicked on grandparent')

},false )
document.querySelector('#parent').addEventListener('click',(e)=>{
  console.log('clicked on parent')
},true)


document.querySelector('#child').addEventListener('click',()=>{
  console.log('clicked on child')
},false)


// Stopping an propogation 
document.querySelector('#grandparent').addEventListener('click',(e)=>{
    console.log('clicked on grandparent')
    // e.stopPropagation() 
},false )

document.querySelector('#parent').addEventListener('click',(e)=>{
  console.log('clicked on parent')
//   e.stopPropagation()
},false)


document.querySelector('#child').addEventListener('click',(e)=>{
  console.log('clicked on child')
  e.stopPropagation()
},false)

// Best Way for getting Events 
// take the grandparent event 
document.querySelector('#grandparent').addEventListener('click',(e)=>{
    console.log(e.currentTarget)
    if (e.target.id === 'gp' ) {
        console.log('Grandparent Called')
        console.log(e.target)
    }
    if (e.target.id === 'p' ) {
        console.log('parent Called')
console.log(e.target)
    }
    if (e.target.id === 'c' ) {
        console.log('child Called')
        console.log(e.target)
    }
})