console.log('Proto Js file')
const info = {
    name : 'Mohit',
    caste : 'Bhandar'
}

function getMoreInfo(course , marks){
    return `${this.name } and ${this.caste} and ${course} and ${marks}`
}

outputString = getMoreInfo.call(info, 'Biology', 100)
console.log(outputString)


// Using Same thing with the help of prototypes 

function blankfun(){}
blankfun.prototype.getInfo = function(course , marks){
    return `${this.name } and ${this.caste} and ${course} and ${marks}`
}

blankfun.prototype.info = {
    name : 'Mohit',
    caste : 'Bhandari'
}

console.log(blankfun.prototype.getInfo.call(blankfun.prototype.info,'Biology',100))

// Working of an proto 

const info1 = {
    name : 'Mohit',
    caste : 'Bhandar'
}

const info2 = Object.assign(info1)
info2.marks = 100
info2.curiculam = 'CSBE'

console.log(info2.name)
console.log(info2.caste)
console.log(info2.marks)
console.log(info2.curiculam)

// Implimeting  proto with the help of Object.new keyword
const funcollectipn = {
    hello_world : function(p) {return `${this.name+p}`},
    public_hello : function (){return ("hello Public")}
}

function getInformation(name , classes , subject){
    const infocollectionobjwithfun = Object.create(funcollectipn)
    infocollectionobjwithfun.name = name
    infocollectionobjwithfun.classes = classes
    infocollectionobjwithfun.subject = subject
    infocollectionobjwithfun.hello = infocollectionobjwithfun.hello_world.call(infocollectionobjwithfun,' proto ')
    return infocollectionobjwithfun
}
const output = (getInformation('Mohit', 'Last year', 'Biology'))
console.log(output)
console.log(output.hello_world.call(output , ' proto : outside'))
console.log(output.public_hello.call(output))

// Working more closely on Prototype in real world scenerio

// Creating a function that will take user values 
function getValues ( name , cLass , subject , markes ){
    this.name = name ;
    this.class = cLass ;
    this.subject = subject ;
    this.markes = markes ;
}

// Creating multiple methods inside prototypes 
getValues.prototype.getNameClass = function() {
    console.log (`Name is ${this.name} and class is ${this.class}`)
}
getValues.prototype.subjectMarks = function() {
    console.log( `Subject is ${this.subject} and Marks is ${this.markes}`)
} 
getValues.prototype.hello = function(num){
    return 'Prototype return'+num
}
// Calling fnctions and prototype methods using new keyword

const newEntry = new getValues('Mohit','Bhandari','Biology',100)
console.log(newEntry)
console.log(newEntry.getNameClass())
console.log(newEntry.subjectMarks())
console.log(newEntry.hello(' Hello Community'))

// returns an empty  object 
// initilize this to the empty object 
// now you can use this inside a function which is like using the same empty object 
// this = enpty object 
// Will create a proton that is refrening to the prototype of the function 

function createUser (firstname , age){
    this.firstname = firstname;
    this.age = age;
}
createUser.prototype.about = function(){
    console.log(this.firstname,this.age);
}
const user11 = new createUser('harshit', 6);
console.log(user11.about());


// old  Method 
function fun2(name , course ){
    const info = {}
    info.name = name
    info.course = course
    return info
}
function information(){
    return `The name is ${this.name} and course is ${this.course}` 
}

const u1 = fun('Shantanu Bisht', 'Mathematics')
console.log(u1)
console.log(information.call(u1))


// Newer method 

function fun(name , course ){
    const info = {}
    info.name = name
    info.course = course
    return info
}
fun.prototype.getUserInfo = function(){
    return `The name is ${this.name} and course is ${this.course}`
}

const user1 = fun('Mohit Bhandari', 'Biology')
console.log(user1)
console.log(fun.prototype.getUserInfo.call(user1))

// Newest Method 
function funWithNew(name , course ){
     this.name = name
     this.course = course
 }
funWithNew.prototype.gettingInfo = function (){
    return `The name is ${this.name} and course is ${this.course}`}
const user1WithNew = new funWithNew('Vivek', 'Mathemeatics')
console.log(user1WithNew)
console.log(user1WithNew.gettingInfo())

// Newest Method Constructor 

class gettingInformation{
    constructor(name , course){
        this.name = name   //variables will be definced here 
        this.course = course
    }
    gettingName (){return  `The name is ${this.name}`}
    gettingCourse (){return  `The course is ${this.course}`}
    gettingInfo(){return `The name is ${this.name} and course is ${this.course}`}
}

const userOne = new gettingInformation('Subham Singh','Singer')
console.log(userOne)
console.log(userOne.gettingName())
console.log(userOne.gettingCourse())
console.log(userOne.gettingInfo())

// Working with the Inheritence 
class animalKingdom{
    constructor(name , age){
        this.name = name   //variables will be definced here 
        this.age = age
    }
    gettingName (){return  `The name is ${this.name}`}
    IsCute (){return  this.age<5} 
}

// extended Call object and using getter to convert the metod into property 
class Cats extends animalKingdom{
    constructor(name , age, speed){
        super(name,age,speed);
        this.speed = speed
    }
    // getter 
    get speedinKmph(){return `Getter Method: Name ${this.name} with age ${this.age} is running at a Speed of ${this.speed}kmph`   }
    // setter
    set settingNewobjects(name){
        let [nName,age,speed] = name.split(" ")
        this.name = nName 
        this.age = age
        this.speed = speed
    }
    // static property 
    static id = 999999999
    // static method
    static information(){
        console.log('System Configuration is Windows 11 : Satic Method Called here')
    }

}
const animal = new Cats('Small Cat',1,45)
console.log(animal)
// printing functions of previous AnimalKingdom 
console.log(animal.gettingName())
console.log(animal.IsCute())
console.log(animal.speedinKmph)
animal.name = 'moder cat'
animal.speed = 20
console.log(animal.gettingName())
console.log(animal.speedinKmph)

// Using Setters
animal.settingNewobjects = 'streetCat 1 20'
console.log("Setting new constructor property : ",animal.gettingName())

// Calling all the Static Methods and Properties of the Class 
console.log(Cats.id) 
console.log(Cats.information())

 








