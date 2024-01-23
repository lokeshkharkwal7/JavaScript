let friedRice = ['vegetable','oil','paneer','soya sauce','Mix Spices']
const promisOutput = new Promise((resolve, reject)=>{
    if (friedRice.includes('vegetable') && friedRice.includes('oil') && friedRice.includes('paneer') && friedRice.includes('soya sauce') )
    {
        result = 'Done You can prepare the Fried Rice'
        resolve(result)
    }
    else{
        error = "Don't have available items"
        reject(error)
    }
})

promisOutput.then(value =>{
    console.log(value)}
)
promisOutput.catch(value => {
    console.log(value)
})

// // META DATA on how to use a Promise
// const promise = new Promise(function(resolve,reject){if(true){resolve()} else {reject()}})
// promise.then(function(resolveParam){})
// promise.catch(function(rejectParam){})

const promiseVar = new Promise(function(resolve, reject){ //will execute inside the browser
    
    setTimeout(() => {
        const flag = true //Your logic
        if (flag){
            resolve('Yes Task is Completed since the flag is true')
        }
        else{
            reject('You Task cannot be fulfilled since the flag is false')
        }
        
    }, 2000);

})
// getting the desired output from the call stack
promiseVar
    .then(function(value){
        console.log(value)
    }) .catch(function(value){
        console.log(value)
    })

// Chaining of this or promises 

const newPromise = new Promise((resolve, reject)=>{
    if (true){
        resolve('Hurrah! ')
    }
})
newPromise.then(value =>{
    console.log(value)
    value = value+'Hurrah!! '
    return value    // return is necessary for chaining
}).then(value=>{        //Chaining Performed
    console.log(value)
    value = value+'Hurrah!! '
    return value  // return is necessary for chaining
}).then(value=>{   //Chaining Performed
    console.log(value)
    value = value+'Hurrah!! '
    console.log(value)
})
