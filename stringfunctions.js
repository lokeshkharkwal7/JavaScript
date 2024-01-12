let string1 = "Hello World  "

// printng the string character by character 

console.log(string1[2])

// comding string with the length function 

console.log(string1.length)

// combing string indentation and length functions 
console.log("String Manipulation using JS")

console.log(string1[string1.length -3 ])

// understanding various string functions 

// converting string to upper case 
console.log(string1.toUpperCase())

// trimming extra spaces from the string 
console.log(string1.trim())

// converting string to a lower case 
console.log(string1.toLowerCase())

// performing slicing operation 
console.log("Slice Operation: " ,string1.slice(2,5))

// performing slicing operation after 3 location 
console.log("Slicing after 3 location: ",string1.slice(4))

// creating a string which will add the numbers and will print out the age 
let rupee1 = 10
let rupee2 = 20
let str = "Boy have total money"

let output = str +" " + (+rupee1 + +rupee2)
console.log(output)