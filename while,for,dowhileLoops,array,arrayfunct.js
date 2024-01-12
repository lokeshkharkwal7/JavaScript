
let i = 0
let resultL = 0
while (i<=5)
{
 
    resultL = resultL + i
    i++
}

console.log("Output of the given number is : ", resultL)

// printing of a star pattern using for loop 
 
let ansL = 0
for ( let i = 0; i<5 ; i++)
{
    console.log("Iteration : ", i)
    ansL = ansL+i
}
console.log("Sum of the entire number in a series is : ", ans)

// Array introduction to the datatypes in js 
let array = [1,2,3,4,5]
console.log(array)

// Understanding the indentaation in array 
console.log(array[4])

// understanding various functions in array 
console.log("type of array is: ",typeof array)
// using push pop shift unshift 
let array1 = array.push(6)
console.log("The value after push", array)
let array2 = array.pop()
console.log("The value after pop", array)
let array3 = array.unshift(10)
console.log("The value after unshift", array)
let array4 = array.shift()

console.log("The value after shift", array)
let dtype = Array.isArray(array)
console.log(dtype)

 