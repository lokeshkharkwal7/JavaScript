// sring that will print area of the circle with a given radius 

let r = 5
let pi = 3.14
let ans = ` Area of the circle with radius ${r} is ${pi * r**2} `
console.log(ans)

// workinig with the different data types in javascript 

let number 
console.log("Data type of non initialized variable",typeof number)
number = 3000000
console.log(typeof number)


// working with null datatype 

let numberNull = null
console.log("Type of null operators ",typeof numberNull)

// whenever you will try to print the data type of null it will print the datatype as an obj 

// BigInt

let bignumber = BigInt(number)
let bignumber2 = 199999999n

console.log("Output of add 2 bigInt's ",bignumber+bignumber2)

// working with the boolean data tupe and operators 

// by defaule the bitwise operators treat all datatypes equally
// If you want to make sure that datatypes will also be considered for comparison   marked use === 

let a = 10
let b = 10
let c = "10"
console.log("If datatype is not important ",a==b)
console.log("if datatype is important" , a===c)
console.log("Normal not equals to calculation ",a!=c)
console.log("Normal not equals to calculation but comparing datatups also",a!==c)
console.log("greate to calculation",a>b)
console.log("greated to calculation with string " ,a>b)

// Working with the if and else condition 

let a1= 10
let a2 = 0
let a3 = 1
let a4= true 
let a5 = false

if (a5){
    console.log("True Value")
}else {
    console.log("False Value") 
}

// working with the ternary operators for minimising line of code with if and else condition 

let answer = a5 ? "value is True":"Value is false"
console.log(answer)

// building a game in nested if and else ladder 

let winningno = 100
let your_number = +prompt("Please provide me with your lucky guess in between [1-100]")
let result 

if (your_number == 100){
    result = "Wow you are selected"
} else {
    result = "Better luck next time"
}

console.log("Your lucky draw result ",result)

 // Created a game on a nested if and else ladder 
let result1
if (your_number!= winningno)
{
if(your_number < winningno)
    {
        result1 = "Your Number is smaller than the winning number"
    }
    else
        {
            result1 = "Your number is greated than the winning number"
        }
}  
else 
    {
        result1 = "You got Selected Congrats !!"
    }
console.log("Lucky draw result with precission using if else ladder",result1)

let result3
if (your_number===winningno)
{
    result3 = "You have Won the Lottery Congrats!"
}
else if (winningno>your_number)
{
    result3 = "Your number is smaller than the winning Number"
}
else if (winningno<your_number)
{
    result3 = "Your number is greater than the winning number"
}

console.log("Result with the use of else if ",result3)


// Creating a prgram with switch case that will check whether it is right to go outside or not

let temp = 18
let outputStatment 

switch (temp)
{
    case 0 :
    case 1 :
    case 2:
    case 3:    
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
        outputStatment = "Temperatur is low don't go outside"
         break;
    case 10:
    case 11:
    case 12:
    case 13: 
    case 14:   
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:    
        outputStatment = "Temperatur is moderate but come back in time ";
        break;
    case 20:
    case 21:
    case 22:
    case 23: 
    case 24:   
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:  
        outputStatment = "Temperatur is optimium you can enjoy ";
        break;
    default :
        outputStatment = "Temperatur is high don't go ";
    
}

console.log("The Thermameter reading : ", outputStatment)


 
 