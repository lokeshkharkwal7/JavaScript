// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

//Constructor Functions 
function getNames(name , course , marks){
    this.name = name 
    this.course = course
    this.marks = marks
}
getNames.prototype.getInfo = function (){
    return `Name is ${this.name} and the course is ${this.course} and the marks is ${this.marks}` }
    
const user1 = new getNames('Mohit', 'Biology',100);
console.log(user1)
console.log(user1.getInfo())

// class functions with inheritence 
class Corbett{
    constructor(name , power){
        this.name = name 
        this.power = power
    }
    getNamePower(){
        return (`The Name is ${this.name} and the power is ${this.power}`)
    }
}
class Cat extends Corbett{
    constructor(name,power,speed){
        super(name, power)
        this.speed = speed }
    getExtended(){
        let output = super.getNamePower()
        console.log('Extended Output is ', output)
    }
        
    getSpeedPowerName (){
        console.log(`The Name is ${this.name} and the speed is ${this.speed} and the power is ${this.power}`)
    }
    set setConstructor(newconstructor){
        const [name , power , speed] = newconstructor.split(" ")
        this.name = name 
        this.power = power 
        this.speed = speed}
    get getCompleteInforAsProperty(){
        return `The Name is ${this.name} and the speed is ${this.speed} and power is ${this.power}`
    } }
CatAnimal = new Corbett('Small Cat',  10)
CatAnimal2 = new Cat('Small Cat',  10,20)
console.log(CatAnimal2.getNamePower())
console.log(CatAnimal2.getSpeedPowerName())
CatAnimal2.getExtended()

//working with Setter Method
CatAnimal2.setConstructor = 'Shantanu 20 30'
console.log(CatAnimal2.getSpeedPowerName())

// Using getter Method 
console.log(CatAnimal2.getCompleteInforAsProperty)

// Using  Closures to Understand deeply about Java Script Runtime Environment

const functionClosures = function() {
    let count = 0
    return function(){
        if( count<1){
            console.log('Encrypted your Function is Called Once')
            count ++
        }else{
            console.log('This Function will not Repeat itself further')
        }  } }
// Call first Time 
const callOnce = functionClosures()
callOnce()
// Calling same function Second Time 
callOnce()



 










 