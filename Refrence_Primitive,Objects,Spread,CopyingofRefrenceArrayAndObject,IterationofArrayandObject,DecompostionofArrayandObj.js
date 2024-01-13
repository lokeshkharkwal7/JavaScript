let array = [1,2,4,5,6,7,9]
let var1 = 10
let var2 = 20

// changing the reference of the data types 
let array_copy = array
let var_copy = var1

console.log("Array one is : ", array)
console.log("Updating the array...")

// now updating the array 
array.push(var1)


// now printing the array1 and array to see the values 

console.log("Value of array : ", array)
console.log("Value of copied_array : ", array_copy)

// now updating the data inegers 

var1 = "Integer got changed into string"

// checking the values of updated integers variable 

console.log("The value of var1 after update: ", var1)
console.log("The value of the ineger var1_copy : ", var_copy)

// using for loops in arrays 

let array1 = [1,2,3,4,5,6,7]
for (let i = 0; i<array1.length; i++)
{
    console.log(`Value in the ${i+1} element is : ${array1[i]}`)
}

// while loop to comprehend the array 
console.log("Whhile loop started")
let i = 0
while (i != array1.length) 
{
    console.log(`Value stored in the location ${i} is : ${array1[i]}`)  
    i++
}

// handeling the copying of the refrence related data types 
copyOfArray1= []+array1
array1.push(11) 
console.log(copyOfArray1)
console.log(array1)
// another way of copying the refrence data variables into another variables 

copyOfArray1slice = array1.slice(0)+[]
array1.push(10)
console.log(copyOfArray1slice)
console.log(array1)

// Third and the most widely used way of copying the refrence variables from the heap

copyOfArray1dot = [...array1]
array1.push('dot')
console.log(copyOfArray1dot)
console.log(array1)

// Recommend way of copying array is using ... but it is kinda slow 

newArray = [1,2,3,4,5]
updatedValue = [6,7,8,9,10]
refrenceArray = newArray
finalArray = [...newArray, ...updatedValue]
console.log(refrenceArray)
console.log(finalArray)

// decomposition of the array 
let sampleArray = [1,2,3,4,5,6,7]
let [element1, element2 , element3] = sampleArray
console.log('Value at the 1st location: ', element1)
console.log('Value at the second location: ', element2)
console.log('Value at the third location: ', element3)

// storing the rest array into a new dataarray 

let [elemenT1, elemenT2 , ...remainingArray] = sampleArray

console.log('Element at 1st location: ', elemenT1)
console.log('Element at 2nd location: ', elemenT2)
console.log('Remaining element at array is: ', remainingArray)

// Working with the objects in JS
const pan = 123
let object1 = {
    name : 'Rohit',
    cast : 'Thakkuna',
    phone : 12345,
    "Father's Name" : 'Vinay Thakkuna'
}

object1.email = 'rohit@gmail.com'
object1.pan = pan
object1["Father's Name"] = "Nischay Thakkuna"

// alternate ways to assign new variables into an object 

object1['Address'] = 'Uttarakhand'
object1['Full Name'] = 'Rohit Thakkuna'

// if you want to create a key name with an constant you can just replace with the vaiable
const key = 'age'
object1[key] = 14


console.log(object1)


// Iterating the variables present in the objects 

for (let i in object1)
{
    console.log(`Value stored in ${i} is : ${object1[i]}`)
}

// assigning dynamic operators inside the objects 

let blankObj = {}
let key1 = 'Name'
let key2 = 'Phone'
let val1 = 'Harshit'
let val2 = 9875432345
blankObj[key1] = val1
blankObj[key2] = val2
console.log("The values of the newest object is :",blankObj)


// iterating with the objects using objext.keys()

const keysInDict = Object.keys(object1)
console.log(keysInDict)

// Different use cases of Spread Operator 

// case 1: copying all the preiously defined objects since objexts are refrence type variables
const randomObj = {
    'Name' : 'Bhavesh',
    'Id' : 'Web Dev'
}

const copyObj = {...randomObj}
console.log(copyObj)

// case 2: converting any string or array values into object

const testArray = ['React', 'Node', 'Go']
const arrayObj = {...testArray}
console.log(arrayObj)

// case 3: comining multiple objexts into a single object 

const obj1 = {
    Name : 'Bharat',
    Title : 'Reach Dev'
}

const obj2 = {
    City : "Chandigarh",
    Package : 20
}

const comineObj = {...obj1, ...obj2}
console.log('The Combination of different objects: ', comineObj)

// decomposition of the object 
// transfering the values of the key to a different object 

const {Name:name,Title:vartitle,City:varcity,Package:varpkg} = comineObj
console.log(varpkg)

// splitting of an array to a variable and objects

const {Name : varname , City: varCity, ...remainInfo} = comineObj
console.log(varname)
console.log(varCity)
console.log('Value of the Remaining str: ', remainInfo)
 


 




