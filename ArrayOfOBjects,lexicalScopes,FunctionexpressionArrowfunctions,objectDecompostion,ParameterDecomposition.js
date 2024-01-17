// we will store multiple objects inside array and then will perform decomposition 

const arrayOfObj = 
[
    {name : "Akash", PAN : 12345},
    {name : "Nikhil", PAN : 98765},
    {name : "Sumit", PAN : 56789},
]

// getting the values which are present inside the objects which is inside an array

let [akash, nikhil, sumit] = arrayOfObj
console.log(akash)

// Using Object decompostion inside the array 

const [{name: akashName},{PAN: nikhilPan , name:nikhilName},{PAN: sumitPan}] = arrayOfObj

console.log(`Akash name is : ${akashName}`)
console.log(`Sumit Pan No is : ${sumitPan}`)
console.log(`Name of Nikhil is : ${nikhilName}`)

// Functions in JS 

// Creating a function which will return even and odd based on the given value 

let value = 51

function isEven(i)
{
    return i%2==0 ? true : false
}

console.log(isEven(value))

// writing a function that will return the first character of a string 

function getfirstChar(str)
{
    return str[0]
}
console.log('The first character of the string is : ', getfirstChar("Hello World"))

// Creating a function that will return the value that is present in the that particular indentation of the string 
function getIndex(array , index){

    for ( var i in array){
        if (i === index){
            let iN = index
            let val = array[index]
        }}
    return `Value of index ${i} is stored in ${array[index]}`
}

// now getting the index from the value 

function getvalue(array , index){
    
    for ( var i in array){
        if (array[i] === index){
            return i       
        } 
    }return 'Value not found'} 

// Calling the functions 

console.log(getIndex([1,2,3,4,5,6,7,8,9], 5))
console.log('The value of 5 is stored in : ', getvalue([1,2,3,4,5,6,7,8,9] , 5))

// Working with the functions expressions - saving functions inside and variable 

const funct_name = function(){
    return 'This is the Function created with function expression'
}
console.log(funct_name)

// Same functions of finding the location of element with the help of the function expression 

const functGetIndex = function(array , index){
    for (i in array){
        if (array[i] === index){
            return `Element ${+i+1} found in index ${array[i]}`
        }
    }return 'Element not found in array'
}
console.log(functGetIndex([1,2,3,4,5], 4))

// Wrorking witih the arrow function 
const arrow_Fun = (num1) => {
    return num1[0]
}
console.log("Consoling the output of the first no: ", arrow_Fun("This is Us"))

// Working with the arrow function with the simply return XPathExpression 
const arrow_return = (n1, n2) => n1+n2
console.log("Minimilistic Arrow function output: " , arrow_return(5,5))

// Wrokgin with the scopes of the functions 
let v = 'valueglobal'
if (true){
    function fun(){
        let v = "valuefun"
        console.log("inside fun",v)
    }
    
    function fun2(){
        let v = 'valuefun2'
        function fun3(){
            console.log("inside fun 2 and in fun 3",v)
        }
        fun3()}}
console.log(v)
fun()
console.log(v)
fun2()
console.log(v)

// Intializing the default parameters 
const functionDefault = (num1, num2 = 5) => num1+num2
console.log("Combine value is : ",functionDefault(5))

// Working with the Rest parameters 
// printing sum of the infinite arguments using Rest Parameters

const func = (n1, ...array) => {
    let sum = 0
    for (let i in array) {   
        sum = sum+array[i]
    }
    return sum*n1
}
console.log("The Sum of the array : ", func(1,2,3,4,5,6,7,8,9,10))

// working with the parameter destructering inside js function 
// normal way to pass an object inside an parameter 
const sampleObj = {
    Name : 'Ravi',
    Company : 'PureIT'
}
const combinN = (object) => {
        console.log("Name is :", object.Name)
        console.log("Company is :", object.Company)
}
combinN(sampleObj)

// Parameter Destructuring 
const funPDestruct = ({Name: valName, Company: valCompany}) =>
{
    console.log("Name of the Employee using Parameter Destruct is :", valName )
    console.log("Company of the Employee using Parameter destruct is : ",valCompany )
}
funPDestruct(sampleObj)

// Working with the call back functions 

const function1 = (num) => {
    return `Value is ${num}`
}

const funtioncallback = (callback) =>{
    let name  = "Harshit"
    console.log(callback(name))
}
funtioncallback(function1)

// function returning functions 

const functionreturn = ()=>{
    const functioninside = ()=>{
        console.log("This function is returning something using higher order functions")
    } 
    return functioninside
}
const a = functionreturn()
a()

// Practicing the call back function from scratch 
function perform_callback (functioN){
    num = "Variable from the Mongo DB Server"
    functioN(num)
}

function callback(name){
    console.log(`Callback Function : The value that you are looking for is : ${name}`)
}
perform_callback(callback)

// function returning functions
function returningfunc(functionN){
    let namee = "Value from the MongoDB Server"
    return functionN(namee)
}
function callback(name){
    return `The name is with the help of callback and returning fun is :${name}`
}
console.log(returningfunc(callback))

// writing a function that will flattern an array
function flattern_array(array){
    // example the array is [[1,2],[3,4],[5,6]] 
    const result = []
    for (let i in array) {
        for (let j of array[i]) {
            result.push(j)
        }}
    return result
}
array = [[1,2],[3,4],[5,6,7]] 
console.log(flattern_array(array))