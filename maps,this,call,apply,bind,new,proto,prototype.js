const newMap = new Map()
newMap.set("Pithoragarh" , 100)
newMap.set("Haldwani", 200)
console.log(newMap)

// checking if city is pithoragarh then updating its value to 500
if (newMap.get('Pithoragarh')){
    newMap.set("PithoragarhUpdated",newMap.get('Pithoragarh'))
    newMap.delete('Pithoragarh')
}
console.log(newMap)

// Alternative wayof updating the keys inside an Map

if (newMap.has("PithoragarhUpdated")){
    newMap.set("Pithoragarh", 500)
    newMap.delete("PithoragarhUpdated")
}
console.log(newMap)

// Handeling the this keyword which is pointing to the current working environment 
 const objct = {
    name : "name 1",
    marks : "marks 1"
}
const objct2 = {
    name : "name 1",
    marks : "marks 1"
}
const objct3 = {
    name : "name 1",
    marks : "marks 1",
    thisfuninsideobj : function(){
        console.log( `${this.name} and ${this.marks}`) }
}

// const thisfun = (object)=>{return `The name is ${this.name} value is :${this.marks}`}

console.log(objct3.thisfuninsideobj())

// Working with the Call Bind and Apply functions 
// Call
function thisInside(){
    console.log(`Name is ${this.name} and Marks is ${this.marks}`)
}
const info = {
    name : "name 1",
    marks : "100"} 
    
const info2 = {
    name : "name 2",
    marks : "100"} 
    
const info3 = {
    name : "name 3",
    marks : "100"} 

console.log(thisInside.call(info))
console.log(thisInside.call(info2))
console.log(thisInside.call(info3))

// Apply taking the above objects as an example 
function takingArgumentthis(num1, num2){
    console.log(`Name is ${this.name} and Marks ${this.marks} and hobbies are ${num1} and ${num2}`)
}
console.log(takingArgumentthis.apply(info, ['Guitar', 'Coding']))
console.log(takingArgumentthis.apply(info2, ['Books', 'Coding']))
console.log(takingArgumentthis.apply(info3, ['Guitar', 'Coding']))

// bind function 
const copythisfunction = thisInside.bind(info)
console.log(copythisfunction())

// binding with arugments
const copythisArgumentFunction = takingArgumentthis.bind(info, 'Chess', 'Coding')
console.log('Copied with Arguments via Bind: ')
console.log(copythisArgumentFunction())

// Perfect approach of making the code reusable 

function afun(){}
afun.prototype.functionList = {
    is18: function(){ return this.age>18 },
    isCoder: function(){return this.coder} ,
    isSinger : function(){return this.sing}
}


function getUsers(name , marks , age , coder, sing ){
    object = {}
    object.name = name
    object.marks = marks
    object.age = age 
    object.coder = coder
    object.sing = sing
    functionList= afun.prototype.functionList //accessing the protype
    object.is18 = functionList.is18.call(object)//using functions thare are stored in prototype list
    object.isCoder = functionList.isCoder.call(object) // using call to use the this keyword for the object
    object.isSinger = functionList.isSinger.call(object)
    return object
}
info1 = getUsers('Ram',100,10,'True','True')
console.log('User one is a Singer : ', info1.isSinger)
console.log(info1)

// Working with ___proto 
// Creating an normal object as ob
const ob = {
    Friends : ["Ram", "Shyam", "Swati", "Simran"]
}
// creating an another object that will store value as an proto chain
const ob2 = Object.create(ob) 
ob2.education = ['Saint Don Bosco', 'Chandigarh University']
ob2.subjects = ['Mathematics', 'Computer Science']

// using proto calling the values which are inside some other function 

console.log("Proto Obj : ",ob2)
// Getting properties of ob 
console.log("Accessing values of the Proto Refrence : ", ob2.Friends)

console.log("Real proto object " ,ob2.__proto__)
// Understanding Prototypes 
// Creating a function 
function getprototype(){}
// Printing its prototype
console.log(getprototype.prototype)
// adding values to the protype(constructor) 
prototypes = getprototype.prototype
prototypes.list = [1,2,3,4,5]
prototypes.name = 'name'
prototypes.function = (argument)=> {return argument}
console.log(prototypes.function('Function inside Prototype'))






