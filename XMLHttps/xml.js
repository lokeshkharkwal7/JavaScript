
// XML HTTP REQUEST 
const xhr = new XMLHttpRequest()
// console.log(xhr)
const url = 'https://jsonplaceholder.typicode.com/posts'
// step 1 using get request to make a connection with the server using get or post method 
console.log(xhr.readyState) //Before called means op is 0
xhr.open("GET",url)  //Happen Asynchronously by browser
console.log(xhr.readyState) //after open means op is 1

// xhr.onreadystatechange = function(){
//     console.log(xhr.readyState)
//     if (xhr.readyState == 4){
//         console.log('Your Response from the Host: ')
//         const serverOutput = xhr.response
//         const realData = JSON.parse(serverOutput)
//         console.log(realData)

//     }
// }

// READY STATES =>
// 0 => MEANING THE CLIENT IS CREATED BUT OPEN IS NOT CALLED
// 1 => MEANING THE CLIENT IS CREATED BUT OPEN IS CALLED
// 2 => ALL DONE AND SEND IS ALSO CALLED AND HEADER AND STATUS ARE RECEIVED
// 3 => DOWNLOADING RESPONSETEXT HOLDLING PARTIAL DataTransfer
// 4 => HURRAH! THE OPERATION IS COMPLETE YOU WILL GET THE RESPONSE

// Shortcut of getting output wihout using above code we are just calling onload method

xhr.onload = function(){
    console.log(xhr.readyState)
    console.log('Your Response from the Host: ')
    const serverOutput = xhr.response
    const realData = JSON.parse(serverOutput)
    console.log(realData)
}
xhr.send()

