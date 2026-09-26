fetch("https://fakestoreapi.com/products/20")
.then(response=>{
    response.json()
    .then(data =>{
        console.log(data)
        
    }).catch(error=>{
    console.log(error)
})
}).catch(error=>{
    console.log(error)
})