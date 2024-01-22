const todoformm = document.querySelector('#todo-form')
const iteminform = document.querySelector('#todo-form input[type="text"]')
const list = document.querySelector('.todo-listul')
console.log(iteminform.textContent)
todoformm.addEventListener('submit',function(e){
    e.preventDefault()
    const value = iteminform.value
    let liele = document.createElement('li')
    const newhtml = `<p class="list">${value}</p>
    `
    liele.innerHtml = newhtml
    list.appendChild(liele)
})
textinput = document.querySelector('#todo-form input[type="text"]')
form_button = document.querySelector('#todo-form input[type="submit"]')
form_button.addEventListener('click',function(e){
    e.preventDefault() 
    const text_content = (textinput.value)
    console.log(text_content)
    let ele = document.createElement('li')
    ele.classList.add('list')
    ele.innerHTML = `${text_content}<br><br>
    <button class="bt-class" id = 'complete'> Complete</button>
    <button class="bt-class" id = 'remove'> Remove</button><br><br>
    `
    const ul = document.querySelector('#todo-listul')
    ul.append(ele) 
    console.log(ele)

})
console.log(form_button)
console.log(textinput.value)

// select the main division 
const todolist = (document.querySelector('.todo-list'))
todolist.addEventListener('click', function(e){
    console.log(e.target)  // e.target will select each and every element which is present inside class todo-list
    console.log(e.target.id) // this will print the id of the html tag
    if (e.target.id === 'complete'){
        console.log('complete button clicked')
        const targetButton = e.target.parentNode
        e.target.style.textDecoration = 'line-through'
        targetButton.style.textDecoration= 'line-through'
    }
    if (e.target.id === 'remove'){
        console.log('remove button clicked')
        let tagetElement = e.target.parentNode
        tagetElement.remove()
     }
})

 