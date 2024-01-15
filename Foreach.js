numbers = [1,2,3,4,5,9]
// function functionName(index, number){
//     return `Element in the list ${index} which is: ${number[index]}`
// }
// numbers.forEach(function(element) {
//     console.log(`Value of the elements are : ${element*2}`)
    
// });


function funname(element){
    console.log('Elements are :', element)
}

// this loop will update each and every element of an array as defined in the function

numbers.forEach(funname);


// Creating a map function and copying pan informaton to an array

const database = [
    {name : "Harsit", pan : 1234},
    {name : "Nitin", pan : 3334},
    {name : "Shyam", pan : 9876},
    {name : "Pankaj", pan : 4567}
]

const nameList = database.map(
    ({pan:panno}) =>{
        return panno+10000
    }
)
console.log(nameList)

// filter , reduce 
// working with the filters 

arrayFilter = [1,2,3,4,5,6,7,8,9,10]
function ReturnEven(num){
    return num %2 === 0;}
filterdvalue = arrayFilter.filter(ReturnEven)
console.log(filterdvalue)

// Wrokring with Reduce 
const fipkart_cart = [
    {productName : 'Mobile', price : 30000},
    {productName : 'Laptop', price : 70000},
    {productName : 'Bike', price : 150000},
    {productName : 'Guitar', price : 3000},
]

totalPrice = fipkart_cart.reduce((accumulator , {price:priceval})=>{
    return accumulator + priceval
},0)
console.log(totalPrice)
// Basic example of Reduce 
const arraysum = [1,2,3,4,5]
total = arraysum.reduce((accumulator, item)=> {return accumulator+item})
console.log(total)

// Wrokging with the sort  technique in JS
const sampleArray = ['Ram','Shyam','Sundar','Ravi','Vard',]
console.log(sampleArray.sort()) // Will work fine 

// But if you want to sort the numbers than due to ASCI code the approach is different 
const arrayName = [123,2,3343,1,10000,534]
console.log(arrayName.sort((a,b)=>{
    return a-b
}))

// Sorting from Descending order 
console.log(arrayName.sort((a,b)=>{
    return b-a
}))
const fipksort = [
    {name : 'Apple' , price :1000000 },
    {name :'Moto' , price : 20000},
    {name : 'Vivo', price : 10000},
    {name : 'Infinix', price : 140000}]
// sorting values from low to high 

const outputF =  [...fipksort].sort(({price:a},{price:b}) =>{
    return a-b;
})
console.log(outputF)
// sorting values from low to high 
const outp = [...fipksort].sort((a,b) =>{
    return a.price-b.price     
})
console.log(outp)
console.log(fipksort)
// lets create some arrays and perform find, every , some and fill operations 
// find operations
const testArray =[
    {name : "product 1" , price : 100} , 
    {name : "product 2 ", price :200} , 
    {name : "product 3", price :300} , 
    {name : "product 4 ", price :400} , ]
const fun = function({name}){
      return name === 'product 1'
}
const testOutput = testArray.find(fun)
console.log(testOutput)

// Every operation 
console.log("Every operation output ",testArray.every(({name})=>{ name === 'product 1'})) 
// Some operation 
console.log("Some operation output ",testArray.some(({name}) => {  name === 'product 1' }));
// testArray.fill()
const arrayFill = [1,2,3,4,5,6,7,8,9,10]
let outfill = [...arrayFill].fill(0,0,4)
console.log("Filled Value is : ",outfill)
// Working with the Splice operation

copiedArrayfill = [...arrayFill]
let outSplice = copiedArrayfill.splice(0,2,"Deleted","Deleted")
console.log("Output of the Splice Operation",copiedArrayfill)
console.log("Output of the previous array Fill  ",arrayFill)
// Working with the Sets

let aSet = new Set()
aSet.add(10)
aSet.add(20)
console.log(aSet)
// Finding the length of the set 
float = 0
for (let i of aSet){
    float++
}
console.log(float)
