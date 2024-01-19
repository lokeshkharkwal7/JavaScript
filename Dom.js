console.log(document) 
const contents = document.getElementById('main-heading')
contents.style.color = 'Green'

const ClassElements = document.getElementsByClassName('nav-item')
console.log(ClassElements)
for ( let ele of ClassElements){
    ele.style.color = 'Blue'
}

const element_ = document.querySelector('#main-heading')
element_.style.color = 'Pink'

const element_2 = document.querySelector('div.headline h2')
element_2.style.color = 'White'
console.log(element_2) 
// Getter and setter attributes in documents 
// querySelector , getElementById, getElementsByClassName
// getAttribute, setAttribute

const anchorelement = document.querySelector('a')
let ahref = anchorelement.getAttribute('href')
anchorelement.setAttribute('href','www.google.com')
console.log(anchorelement.attributes.href)
// document consist of all the key value pairs that are present inside your webpage 
console.log(document.querySelector('a').getAttribute('href'))


const collectionsElements = document.getElementsByClassName('nav-item')
console.log(collectionsElements)

// Working on the multiple class objects 

const changeNav = document.getElementsByTagName('a')
console.log(changeNav)
for (let component of changeNav){
    component.style.backgroundColor = '#fff'
    component.style.color = 'Black'
}

// Changing of inner html 
const heading = document.querySelector('.headline')
console.log(document.querySelector('li'))
console.log(heading.innerHTML)

heading.innerHTML = '<h1> Hello World <h2>'
heading.innerHTML = heading.innerHTML + '<button class="btn btn-headline"> Button </button>'

