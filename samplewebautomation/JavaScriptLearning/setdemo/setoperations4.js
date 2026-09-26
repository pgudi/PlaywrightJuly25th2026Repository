//declare set and Read Elements

let obj=new Set(["Mango","Apple",10,50,90,true,"Orange",70])
//console.log(obj)
//first Appraoch
for(let x of obj)
{
    console.log(x)
}
console.log("------------------------------")
//Second Appraoch
for(let element of obj.values()){
    console.log(element)
}
console.log("------------------------------")
// Third Approach
obj.forEach(function(x){
    console.log(x)
})