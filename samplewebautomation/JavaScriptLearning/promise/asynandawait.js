const apiresult=async function(){
    const response=await fetch("https://fakestoreapi.com/products/20")
    const resposnedata=await response.json()
    
    console.log(resposnedata)
} 

apiresult()