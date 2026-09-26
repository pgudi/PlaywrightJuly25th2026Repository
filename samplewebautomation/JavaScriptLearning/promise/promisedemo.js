
let myPromise=new Promise(function(resolved, rejected){
    let status=false
    if(status){
        resolved("The Task has completed Successfully ")
    }else{
        rejected("The Task has not completed Successfully")
    }
})

myPromise.then(result=>{
    console.log(result)
}).catch(error=>{
    console.log(error)
}).finally(always =>{
    console.log("This task execute always............ ")
})
console.log("-------------------------------------------")
let loginPromise=new Promise((resolved, rejected)=>{
    let loginStatus=true
    if(loginStatus){
        resolved("The Login Action has performed successfully")
    }else{
        rejected("The Login Action has not performed successfully")
    }
})

loginPromise.then(result=>{
    console.log(result)
}).catch(error=>{
    console.log(error)
}).finally(always =>{
    console.log("This task execute always............ ")
})